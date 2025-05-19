import multer from "multer";
import path from "path";

export const fileUpload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/images");
    },
    filename: (req, file, cb) => {
      const fileName = `${Date.now()}-${Math.random()
        .toString(36)
        .slice(2, 6)}`;
      cb(null, fileName + path.extname(file.originalname));
    },
  }),
  limits: { fileSize: 10 * 1024 * 1024 },
});
