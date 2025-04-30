import { Request, Response, NextFunction } from "express";
import { readFile, writeFile } from "../utils/io.js";
import { Transaction } from "../types/transaction.js";

export async function getAllTransactions(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    let allTransactions: Transaction[] = await readFile(
      "src/data/transactions.json"
    );

    if (!allTransactions || allTransactions.length === 0) {
      res.status(404).json({ message: "No transactions found" });
      return;
    }

    // const type = req.query.type
    // const category = req.query.category
    const { type, category, startDate, endDate } = req.query;

    if (type) {
      allTransactions = allTransactions.filter(
        (transaction) => transaction.type === type
      );
    }

    if (category) {
      allTransactions = allTransactions.filter(
        (transaction) => transaction.category === category
      );
    }

    if (startDate) {
      allTransactions = allTransactions.filter(
        (transaction) =>
          new Date(transaction.date) >= new Date(startDate as string)
      );
    }

    if (endDate) {
      allTransactions = allTransactions.filter(
        (transaction) =>
          new Date(transaction.date) <= new Date(endDate as string)
      );
    }

    res.status(200).json(allTransactions);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error getting all transactions data:", error });
  }
}

export async function getTransactionById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const transactionId = +req.params.id;
    const allTransactions: Transaction[] = await readFile(
      "src/data/transactions.json"
    );

    // Untuk memastikan allTransaction variable ada isinya
    if (!allTransactions || allTransactions.length === 0) {
      res.status(404).json({ message: "No transactions found" });
      return;
    }

    // Untuk mencari transaction yang ditargetkan
    const transaction = allTransactions.find(
      (transaction) => transaction.id === transactionId
    );

    if (!transaction) {
      res.status(404).json({
        message: `Transaction with id ${transactionId} does not exist`,
      });
      return;
    }

    res.status(200).json(transaction);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error getting single transaction by id:", error });
  }
}

export async function createTransaction(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const newTransaction = req.body;
    const allTransactions = await readFile("src/data/transactions.json");

    if (!allTransactions) {
      res.status(404).json({ message: "No transactions found" });
      return;
    }

    // Mencari transaksi terakhir di dalam data kita untuk diambil id-nya nanti
    const lastTransaction = allTransactions[allTransactions.length - 1];
    allTransactions.push({ ...newTransaction, id: lastTransaction.id + 1 });

    await writeFile("src/data/transactions.json", allTransactions);

    res
      .status(201)
      .json({ message: "New transaction added", transaction: newTransaction });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error when adding new transaction:", error });
  }
}

export async function editTransaction(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const transactionId = +req.params.id;
    const updatedTransaction = req.body;
    const allTransactions: Transaction[] = await readFile(
      "src/data/transactions.json"
    );

    // Mencari index data yang mau diupdate
    const transactionIndex = allTransactions.findIndex(
      (transaction) => transaction.id === transactionId
    );

    if (transactionIndex === -1) {
      res.status(404).json({ message: `Transaction not found` });
      return;
    }

    allTransactions[transactionIndex] = updatedTransaction;

    await writeFile("src/data/transactions.json", allTransactions);

    res.status(200).json({
      message: "Transaction updated",
      transaction: updatedTransaction,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating transaction:", error });
  }
}

export async function deleteTransaction(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const transactionId = +req.params.id;
    const allTransactions: Transaction[] = await readFile(
      "src/data/transactions.json"
    );

    const latestTransactions = allTransactions.filter(
      (transaction) => transaction.id !== transactionId
    );

    await writeFile("src/data/transactions.json", latestTransactions);

    res.status(200).json({ message: "Transaction deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting transaction", error });
  }
}

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
// try {
//   setIsLoading(true);

//   setIsLoading(false);
// } catch (error) {
//   setIsLoading(false);
// } finally {
//   setIsLoading(false)
// }
