import express, { Request, Response, Application } from "express";

import articleRouters from "./routers/article-router.js";

const app: Application = express();
const PORT: number = 8000;

app.use(express.json());

app.get("/api/v1/health", (req: Request, res: Response) => {
  res.status(200).json({ message: "API running" });
});

app.use("/api/v1/articles", articleRouters);
// app.use("/api/v1/categories", categoryRouter)

app.listen(PORT, () => {
  console.info(`Server is running on http://localhost:${PORT}`);
});
