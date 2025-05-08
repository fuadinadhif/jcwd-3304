import express, { Request, Response, Application } from "express";
import { PrismaClient } from "../generated/prisma/index.js";

const app: Application = express();
const prisma = new PrismaClient();
const PORT = 8000;

app.use(express.json());

/* -------------------------------------------------------------------------- */
/*                                     GET                                    */
/* -------------------------------------------------------------------------- */
/* --------------------------- GET - get all users -------------------------- */
app.get("/api/v1/users", async (req: Request, res: Response) => {
  try {
    const allUsers = await prisma.user.findMany();
    res.status(200).json({ data: allUsers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to get all users", error });
  }
});

/* -------------------------- GET - get single user ------------------------- */
app.get("/api/v1/users/:userId", async (req: Request, res: Response) => {
  try {
    const idUser = req.params.userId;
    const singleUser = await prisma.user.findUnique({ where: { id: idUser } });
    res.status(200).json({ data: singleUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to get user data", error });
  }
});

/* -------------------------- GET - search products ------------------------- */
app.get("/api/v1/products", async (req: Request, res: Response) => {
  try {
    const searchKeyword = req.query.search;
    const priceAmount = req.query.price;

    const searchResult = await prisma.product.findMany({
      where: {
        AND: {
          name: { contains: searchKeyword as string, mode: "insensitive" },
          price: { gt: Number(priceAmount) | 0 },
        },
      },
    });
    res.status(200).json({ data: searchResult });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to search product", error });
  }
});

/* -------------------------------------------------------------------------- */
/*                                    POST                                    */
/* -------------------------------------------------------------------------- */
app.post("/api/v1/transactions", async (req: Request, res: Response) => {
  try {
    const { userId, productId, quantity } = req.body;

    const productData = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!productData) {
      throw new Error("Product data not found");
    }

    await prisma.$transaction(async (tx) => {
      const userData = await tx.user.update({
        where: { id: userId },
        data: {
          point: { decrement: productData.price * quantity },
        },
      });

      if (userData.point < 0) {
        throw new Error("Point not sufficient");
      }

      await tx.product.update({
        where: { id: productId },
        data: { stock: { decrement: quantity } },
      });

      await tx.transaction.create({
        data: { productId: productId, userId, status: "PAID" },
      });
    });

    const dataUser = await prisma.user.findUnique({ where: { id: userId } });
    const dataProduct = await prisma.product.findUnique({
      where: { id: productId },
    });

    res.status(201).json({
      message: "Transaction success",
      status: {
        userPoint: dataUser?.point,
        productStock: dataProduct?.stock,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to make transaction", error });
  }
});

app.listen(PORT, () => {
  console.info(`Server is listening on http://localhost:${PORT}`);
});

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
// console.log(10 === 0 && 5 === 5);
// console.log("hello" && 10)
