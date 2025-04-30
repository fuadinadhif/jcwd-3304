import express, { Request, Response, NextFunction, Application } from "express";
import cors from "cors";

import transactionRouter from "./routers/transaction-router.js";

const app: Application = express();
const PORT = 8000;

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.get("/api/v1/status", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ message: "API running" });
});

app.use("/api/v1", transactionRouter);

app.listen(PORT, () => {
  console.info(`Server is running on port: ${PORT}`);
});
