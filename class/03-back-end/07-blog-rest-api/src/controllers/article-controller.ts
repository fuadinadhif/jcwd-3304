import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

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
    const { title, preview, imagePreview, content, imageContent, userId } =
      req.body;

    if (
      !title ||
      !preview ||
      !imagePreview ||
      !content ||
      !imageContent ||
      !userId
    ) {
      res.status(400).json({ message: "Missing required fields" });
      return;
    }

    await prisma.article.create({
      data: {
        title,
        preview,
        imagePreview,
        content,
        imageContent,
        userId: +userId,
      },
    });

    res.status(201).json({ message: "Created new article" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Cannot create new article" });
  }
}
