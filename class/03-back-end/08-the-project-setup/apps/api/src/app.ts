import "dotenv/config";
import express, { Request, Response, Application } from "express";
import cors from "cors";
import { prisma } from "./configs/prisma-config.js";

const app: Application = express();
const PORT: number = (process.env.PORT as unknown as number) || 8000;

app.use(cors());

app.get("/api/v1/health", (_req: Request, res: Response) => {
  res.status(200).json({ message: "API running!" });
});

app.get("/api/v1/users", async (_req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.status(200).json({ data: users });
});

app.listen(PORT, () =>
  console.info(`Server is running on http://localhost:${PORT}`)
);
