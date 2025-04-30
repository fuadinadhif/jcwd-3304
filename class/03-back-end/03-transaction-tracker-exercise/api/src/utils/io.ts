import fs from "fs/promises";
import { Transaction } from "../types/transaction.js";

export async function readFile(path: string) {
  const dataInJSON = await fs.readFile(path, "utf-8");
  const dataInJS = JSON.parse(dataInJSON);
  return dataInJS;
}

export async function writeFile(path: string, data: Transaction[]) {
  await fs.writeFile(path, JSON.stringify(data, null, 2));
}
