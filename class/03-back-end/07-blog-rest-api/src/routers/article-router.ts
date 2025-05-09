import express from "express";

import {
  createArticle,
  getAllArticles,
  getArticleById,
} from "../controllers/article-controller.js";
import { roleGuard, verifyToken } from "../middlewares/auth-middleware.js";

const router = express.Router();

router.route("/").get(getAllArticles).post(createArticle);
router
  .route("/:articleId")
  .get(verifyToken, roleGuard("ADMIN"), getArticleById);

export default router;
