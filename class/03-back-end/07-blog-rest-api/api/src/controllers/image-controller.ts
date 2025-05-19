import { Request, Response } from "express";
import { cloudinary } from "../configs/cloudinary-config.js";
import { PrismaClient } from "@prisma/client";
import fs from "fs/promises";
import { Express } from "express";

const prisma = new PrismaClient();

// 1. Single
// req.file = {filename: "profile.png", size: 1000}
export async function imageSingle(req: Request, res: Response) {
  try {
    const body = req.body;
    const file = req.file;

    if (!req.file) {
      res.status(400).json({ message: "Image not found" });
      return;
    }

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "family-blog-articles",
    });

    if (!result) {
      res.status(400).json({ message: "Failed to upload image to Cloudinary" });
      return;
    }

    await prisma.image.create({ data: { url: result.secure_url } });
    await fs.unlink(req.file.path);

    res.status(200).json({ data: { body: body, file: file } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to upload single image" });
  }
}

// 2. Array
// req.files = [{filename: "profile.png", size: 1000}, {filename: "profile.png", size: 1000}]
export async function imageArray(req: Request, res: Response) {
  try {
    const body = req.body;
    const files = req.files as Express.Multer.File[];

    if (!req.files) {
      res.status(400).json({ message: "Image not foound" });
      return;
    }

    for (const el of files) {
      const result = await cloudinary.uploader.upload(el.path, {
        folder: "family-blog-articles",
      });
      await prisma.image.create({ data: { url: result.secure_url } });
      await fs.unlink(el.path);
    }

    res.status(200).json({ data: { body: body, files: files } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to upload array image" });
  }
}

// 3. Fields
// req.files = [[{filename: "profile.png", size: 1000}],[{filename: "profile.png", size: 1000}]]
export async function imageFields(req: Request, res: Response) {
  try {
    const body = req.body;
    // const files = req.files as {
    //   imagePreview: Express.Multer.File[];
    //   imageContent: Express.Multer.File[];
    // };
    const files = req.files as {
      [key: string]: Express.Multer.File[];
    };

    if (!req.files) {
      res.status(400).json({ message: "Image not foound" });
      return;
    }

    // for (const el of files.imagePreview) {
    //   const result = await cloudinary.uploader.upload(el.path, {
    //     folder: "family-blog-articles",
    //   });
    //   await prisma.image.create({ data: { url: result.secure_url } });
    //   await fs.unlink(el.path);
    // }

    // for (const el of files.imageContent) {
    // const result = await cloudinary.uploader.upload(el.path, {
    //   folder: "family-blog-articles",
    // });
    // await prisma.image.create({ data: { url: result.secure_url } });
    // await fs.unlink(el.path);
    // }

    for (const key in files) {
      for (const el of files[key]) {
        const result = await cloudinary.uploader.upload(el.path, {
          folder: "family-blog-articles",
        });
        await prisma.image.create({ data: { url: result.secure_url } });
        await fs.unlink(el.path);
      }
    }

    res.status(200).json({ data: { body: body, files: files } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to upload fields image" });
  }
}
