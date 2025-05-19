import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import fs from "fs/promises";

import { cloudinary } from "../configs/cloudinary-config.js";

const prisma = new PrismaClient();

export async function getAllArticles(req: Request, res: Response) {
  try {
    const articles = await prisma.article.findMany({
      include: { ArticleCategory: { include: { Category: true } }, User: true },
    });

    const finalResult = articles.map((item) => {
      return {
        id: item.id,
        title: item.title,
        preview: item.preview,
        content: item.content,
        imagePreview: item.imagePreview,
        imageContent: item.imageContent,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
        author: item.User.name,
        category: item.ArticleCategory.map((el) => {
          return el.Category.name;
        }),
      };
    });

    res.status(200).json({ data: articles });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to get all articles data" });
  }
}

export async function getArticleById(req: Request, res: Response) {
  try {
    const id = req.params.articleId;
    const article = await prisma.article.findUnique({ where: { id: +id } });
    res.status(200).json({ data: article });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to get article by id" });
  }
}

export async function createArticle(req: Request, res: Response) {
  try {
    const { title, preview, content } = req.body;
    const files = req.files as {
      [key: string]: Express.Multer.File[];
    };
    const userId = req.user.id;

    if (!title || !preview || !content || !userId || !files) {
      res.status(400).json({ message: "Missing required fields" });
      return;
    }

    const imagePreviewData: { url: string }[] = [];
    const imageContentData: { url: string }[] = [];

    for (const key in files) {
      for (const el of files[key]) {
        const result = await cloudinary.uploader.upload(el.path, {
          folder: "family-blog-articles",
        });

        if (key === "imagePreview") {
          imagePreviewData.push({ url: result.secure_url });
        }

        if (key === "imageContent") {
          imageContentData.push({ url: result.secure_url });
        }

        await fs.unlink(el.path);
      }
    }

    await prisma.article.create({
      data: {
        title,
        preview,
        content,
        userId: +userId,
        ImagePreview: { create: imagePreviewData },
        ImageContent: { create: imageContentData },
      },
    });

    res.status(201).json({ message: "Created new article" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Cannot create new article" });
  }
}

export async function deleteAllArticles(req: Request, res: Response) {
  try {
    await prisma.article.deleteMany();
    res.status(200).json({ message: "All articles has been deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete all articles" });
  }
}

export async function deleteArticleById(req: Request, res: Response) {
  try {
    const articleId = req.params.articleId;
    const userId = req.user.id;
    const userRole = req.user.role;

    const articleData = await prisma.article.findUnique({
      where: { id: +articleId },
    });

    if (articleData?.userId === userId || userRole === "ADMIN") {
      await prisma.article.delete({ where: { id: +articleId } });
      res.status(200).json({ message: "Article has been deleted" });
      return;
    }

    res.status(403).json({ message: "Unauthorize to delete this article" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete article by id" });
  }
}
