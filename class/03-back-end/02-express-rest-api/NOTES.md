# NOTES

## Folder Structure

1. `controllers` - Berisikan file controller yang berfungsi untuk menyimpan code bussines logic dari aplikasi kita
2. `routers` - Berisikan file router yang berfungsi untuk menyimpan route dari aplikasi kita
3. `utils` - Berisikan file utils yang berfungsi untuk menyimpan function-function yang digunakan di dalam aplikasi kita

## Middleware

Fungsi yang akan dieksekusi di antara request dan response

Di Express.js, middleware itu bisa melakukan:

- Membaca dan merubah request / response
- Menghentikan sebuah request (dan mengirim response-nya)
- Memanggil `next()` dan melepaskan request ke middleware selanjutnya

### Bentuk Middleware di Express.js

```typescript
function myMiddleware(req, res, next) {}
```

### Tipe Middleware

1. Application level -> `app.use()`

## Old `app.ts`

```typescript
import express, { Request, Response, Application } from "express";
import { iqraFile, uktubFile } from "./io.js";

const PORT: number = 8000;

const app: Application = express();

// Middleware -> Untuk membaca data json yang dikirim oleh client
app.use(express.json());

app.get("/api", (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome to my first Express.js API" });
});

// GET - get all users
app.get("/api/v1/users", async (req: Request, res: Response) => {
  const userData = await iqraFile("src/data.json");
  res.status(200).json(userData);
});

// GET - get one user by ID
app.get("/api/v1/users/:userId", async (req: Request, res: Response) => {
  const allUserData = await iqraFile("src/data.json");
  const userId = req.params.userId;
  const singleUserData = allUserData.find(
    (item: { id: number }) => item.id === Number(userId)
  );
  res.status(200).json(singleUserData);
});

// POST - create new user
app.post("/api/v1/users", async (req: Request, res: Response) => {
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
});

// PUT - update exisiting user
app.put("/api/v1/users/:userId", async (req: Request, res: Response) => {
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
});

// DELETE - delete one user
app.delete("/api/v1/users/:userId", async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const allUserData = await iqraFile("src/data.json");
  const latestAllUserData = allUserData.filter((item: { id: number }) => {
    return item.id !== +userId;
  });

  await uktubFile("src/data.json", latestAllUserData);

  res.status(200).json({ message: "User deleted" });
});

// DELETE - delete all users
app.delete("/api/v1/users", async (req: Request, res: Response) => {
  await uktubFile("src/data.json", []);
  res.status(200).json({ message: "All users has been deleted" });
});

app.listen(PORT, () => {
  console.info(`Server is running on port: ${PORT}`);
});

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
// const data = await fs.readFile("src/data.json", "utf-8");
// const dataInJS = JSON.parse(data);
// console.log(JSON.parse(data));

// await fs.writeFile("src/data.json", JSON.stringify([]));
// await fs.writeFile(
//   "src/data.json",
//   JSON.stringify(
//     dataInJS.filter((item: { id: number }) => item.id !== 4),
//     null,
//     2
//   )
// );

// fetch("http://somethin.com/api", {
//   method: "POST,
//   body: {
//     id: "1",
//     name: "John",
//     email: "john@mail.com"
//   }
// })

// Nuber("123"); = 123
// parseInt("123"); = 123
// +"123"; = 123

// Spread
const userData = { name: "Nadhif", address: "Palmerah" };
const newUserData = { ...userData, name: "Fuad" };
console.log(userData);
console.log(newUserData);

// Rest Params
```
