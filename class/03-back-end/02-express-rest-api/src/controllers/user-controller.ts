import { Request, Response, NextFunction } from "express";
import { iqraFile, uktubFile } from "../utils/io.js";

export async function getAllUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const userData = await iqraFile("src/data.json");
  res.status(200).json(userData);
}

export async function getUserById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const allUserData = await iqraFile("src/data.json");
  const userId = req.params.userId;
  const singleUserData = allUserData.find(
    (item: { id: number }) => item.id === Number(userId)
  );
  res.status(200).json(singleUserData);
}

export async function createNewUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(req.body);

  // Mengambil data dari req.body
  const newUserData = req.body;

  if (
    !newUserData.id ||
    !newUserData.name ||
    !newUserData.age ||
    !newUserData.email ||
    !newUserData.address
  ) {
    res.status(400).json({ message: "Required fields is missing" });
    return;
  }

  // Mengambil data dari data.json
  const allUserData = await iqraFile("src/data.json");

  // Menambahkan satu data baru dari req.body ke dalam array allUserData
  allUserData.push(newUserData);

  // Menambahkan data terbaru yang ada di allUserData ke file data.json
  await uktubFile("src/data.json", allUserData);

  res.status(201).json({ message: "New user created" });
}

export async function updateUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const userId = req.params.userId;
  const newData = req.body;

  const allUserData = await iqraFile("src/data.json");
  const updatedAllUserData = allUserData.map((item: { id: number }) => {
    if (item.id === +userId) {
      return { ...item, ...newData };
    } else {
      return item;
    }
  });

  await uktubFile("src/data.json", updatedAllUserData);

  res.status(200).json({ message: "User updated" });
}

export async function deleteUserById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const userId = req.params.userId;
  const allUserData = await iqraFile("src/data.json");
  const latestAllUserData = allUserData.filter((item: { id: number }) => {
    return item.id !== +userId;
  });

  await uktubFile("src/data.json", latestAllUserData);

  res.status(200).json({ message: "User deleted" });
}

export async function deleteAllUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  await uktubFile("src/data.json", []);

  throw new Error("Aki soak!");

  res.status(200).json({ message: "All users has been deleted" });
}
