import express, { Request, Response, Application } from "express";
import { iqraFile } from "./io.js";

const PORT: number = 8000;

const app: Application = express();

app.get("/api", (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome to my first Express.js API" });
});

// GET all users
app.get("/api/v1/users", async (req: Request, res: Response) => {
  const userData = await iqraFile("src/data.json");
  res.status(200).json(userData);
});

// GET one user by ID
app.get("/api/v1/users/:userId", async (req: Request, res: Response) => {
  const allUserData = await iqraFile("src/data.json");
  const userId = req.params.userId;
  const singleUserData = allUserData.find(
    (item: { id: number }) => item.id === Number(userId)
  );
  res.status(200).json(singleUserData);
});

app.listen(PORT, () => {
  console.info(`Server is running on port: ${PORT}`);
});

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
// const data = await fs.readFile("src/data.json", "utf-8");
// const dataInJS = JSON.parse(data);
// console.log(JSON.parse(data));

// await fs.writeFile("src/data.json", JSON.stringify([]));
// await fs.writeFile(
//   "src/data.json",
//   JSON.stringify(
//     dataInJS.filter((item: { id: number }) => item.id !== 4),
//     null,
//     2
//   )
// );
