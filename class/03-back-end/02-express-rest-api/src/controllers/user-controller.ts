import { Request, Response, NextFunction } from "express";
import { iqraFile, uktubFile } from "../utils/io.js";

/* -------------------------------------------------------------------------- */
/*                                     GET                                    */
/* -------------------------------------------------------------------------- */
export async function getAllUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // const age = req.query.age;
  // const name = req.query.name;
  const { age, name } = req.query;

  let userData = await iqraFile("src/data.json");

  if (age) {
    userData = userData.filter((user: { age: number }) => user.age >= +age);
  }

  if (name) {
    userData = userData.filter((user: { name: string }) => {
      return user.name
        .toLowerCase()
        .split(" ")
        .includes((name as string).toLowerCase());
    });
  }

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

/* -------------------------------------------------------------------------- */
/*                                    POST                                    */
/* -------------------------------------------------------------------------- */
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

/* -------------------------------------------------------------------------- */
/*                                     PUT                                    */
/* -------------------------------------------------------------------------- */
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

/* -------------------------------------------------------------------------- */
/*                                   DELETE                                   */
/* -------------------------------------------------------------------------- */
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

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
// const person = {
//   name: "Dede",
//   age: 50,
// };

// const name = person.name;
// const age = person.age;
// const { name, age } = person;

// console.log(name);
// console.log(age);
