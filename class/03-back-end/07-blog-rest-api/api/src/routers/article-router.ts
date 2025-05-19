import express from "express";

import {
  createArticle,
  deleteAllArticles,
  deleteArticleById,
  getAllArticles,
  getArticleById,
} from "../controllers/article-controller.js";
import { roleGuard, verifyToken } from "../middlewares/auth-middleware.js";
import { fileUpload } from "../middlewares/file-upload-middleware.js";

const router = express.Router();

router
  .route("/")
  .get(verifyToken, getAllArticles)
  .post(
    verifyToken,
    roleGuard("AUTHOR"),
    fileUpload.fields([
      { name: "imagePreview", maxCount: 3 },
      { name: "imageContent", maxCount: 5 },
    ]),
    createArticle
  )
  .delete(deleteAllArticles);
router
  .route("/:articleId")
  .get(verifyToken, roleGuard("ADMIN"), getArticleById)
  .delete(verifyToken, roleGuard("ADMIN", "AUTHOR"), deleteArticleById);

export default router;
