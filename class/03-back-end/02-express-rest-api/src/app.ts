import express, { Request, Response, Application, NextFunction } from "express";
import { rateLimit } from "express-rate-limit";
import userRouter from "./routers/user-router.js";

const PORT: number = 8000;

const app: Application = express();

// Middleware (3rd Party) -> Untuk memastikan tidak ada overload request
app.use(
  rateLimit({
    windowMs: 1000 * 60,
    limit: 500,
  })
);

// Middleware (Built In) -> Untuk membaca data json yang dikirim oleh client
app.use(express.json());

app.get("/api", (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome to my first Express.js API" });
});

app.use("/api/v1", userRouter);

// Not Found Middleware
app.use((req: Request, res: Response) => {
  res
    .status(404)
    .json({ message: "The route you are looking for does not exist" });
});

// Error Middleware
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send("<h1>The route you are looking for does not exist</h1>");
});

app.listen(PORT, () => {
  console.info(`Server is running on port: ${PORT}`);
});
