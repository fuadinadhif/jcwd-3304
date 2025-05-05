import "dotenv/config";
import express, { Application, Request, Response } from "express";
import pool from "./configs/db.js";

const app: Application = express();
const PORT = 8000;

app.use(express.json());

/* -------------------------------------------------------------------------- */
/*                              Check API Status                              */
/* -------------------------------------------------------------------------- */
app.get("/api/v1/status", async (req: Request, res: Response) => {
  try {
    await pool.query("SELECT NOW()");
    res.status(200).json({
      message: "API is running 🚀",
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Failed to connect to the database", error });
  }
});

/* -------------------------------------------------------------------------- */
/*                                    POST                                    */
/* -------------------------------------------------------------------------- */
/* ------------------------- POST - Add new article ------------------------- */
app.post("/api/v1/articles", async (req: Request, res: Response) => {
  try {
    const { title, content, image } = req.body;
    const result = await pool.query(
      `INSERT INTO articles (title, content, image)
      VALUES ($1, $2, $3) RETURNING *`,
      [title, content, image]
    );

    res
      .status(201)
      .json({ message: "New article created", result: result.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create new article", error });
  }
});

/* -------------------------------------------------------------------------- */
/*                                     GET                                    */
/* -------------------------------------------------------------------------- */
/* ------------------------- GET - Get all articles ------------------------- */
app.get("/api/v1/articles", async (req: Request, res: Response) => {
  try {
    const articles = await pool.query(`SELECT * FROM articles`);
    res.status(200).json({ data: articles.rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to get all articles", error });
  }
});

/* -------------------------- GET - Get all authors ------------------------- */
app.get("/api/v1/authors", async (req: Request, res: Response) => {
  try {
    const { page = "1", limit = "10" }: { page?: string; limit?: string } =
      req.query;
    const skip = (+page - 1) * +limit;

    const totalAuthors = await pool.query(`SELECT COUNT(*) FROM authors`);
    const authors = await pool.query(
      `SELECT * FROM authors LIMIT $1 OFFSET $2`,
      [limit, skip]
    );

    const totalData = +totalAuthors.rows[0].count;
    const totalPage = Math.ceil(totalData / +limit);

    res.status(200).json({ data: authors.rows, totalPage, totalData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to get all authors", error });
  }
});

app.listen(PORT, () => {
  console.info(`Server is running on http://localhost:${PORT}`);
});

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
// Endpoint url -> http://localhost:8000/api/v1/users?age=70
// [domain_name]:[port_number]/[params1]/[params2]/[params3]?[query_key]=[query_value]
