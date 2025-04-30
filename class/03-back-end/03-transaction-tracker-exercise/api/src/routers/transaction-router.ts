import express from "express";
import {
  createTransaction,
  deleteTransaction,
  editTransaction,
  getAllTransactions,
  getTransactionById,
} from "../controllers/transaction-controller.js";

const router = express.Router();

router.route("/transactions").get(getAllTransactions).post(createTransaction);
router
  .route("/transactions/:id")
  .get(getTransactionById)
  .put(editTransaction)
  .delete(deleteTransaction);

export default router;
