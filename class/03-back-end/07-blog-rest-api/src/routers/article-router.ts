import express from "express";
import {
  createArticle,
  getAllArticles,
  getArticleById,
} from "../controllers/article-controller.js";

const router = express.Router();

router.route("/").get(getAllArticles).post(createArticle);
router.route("/:articleId").get(getArticleById);

export default router;
