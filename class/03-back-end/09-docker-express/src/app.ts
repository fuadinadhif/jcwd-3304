import express from "express";
import { PrismaClient } from "./generated/prisma/index.js";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get("/api/v1/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.status(200).json({ data: users });
});

app.post("/api/v1/users", async (req, res) => {
  const name = req.body.name;
  await prisma.user.create({ data: { name } });
  res.status(201).json({ message: "User created" });
});

const PORT = 8000;
app.listen(PORT, () =>
  console.info(`Server running on http://localhost:${PORT}`)
);
