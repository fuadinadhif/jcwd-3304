import "dotenv/config";
import express, { Request, Response, Application } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import articleRouters from "./routers/article-router.js";
import authRouters from "./routers/auth-router.js";
import imageRouters from "./routers/image-router.js";

const app: Application = express();
const PORT: number = 8000;

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.get("/api/v1/health", (req: Request, res: Response) => {
  res.status(200).json({ message: "API running" });
});

app.use("/api/v1/articles", articleRouters);
app.use("/api/v1/auth", authRouters);
app.use("/api/v1/images", imageRouters);

app.listen(PORT, () => {
  console.info(`Server is running on http://localhost:${PORT}`);
});
