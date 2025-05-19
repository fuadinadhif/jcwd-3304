import { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export async function getAllUsers(req: Request, res: Response) {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json({ data: users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "General error. Good luck!" });
  }
}
