import fs from "fs/promises";

interface UserData {
  id: number;
  name: string;
  age: number;
  addres: string;
  email: string;
}

export async function iqraFile(path: string) {
  const dataInJSON = await fs.readFile(path, "utf-8");
  const dataInJS = JSON.parse(dataInJSON);
  return dataInJS;
}

export async function uktubFile(path: string, data: UserData[]) {
  await fs.writeFile(path, JSON.stringify(data, null, 2));
}
