import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

/* ------------------------------------ 1 ----------------------------------- */
// 1. Check token ada atau tidak
// 2. Validasi token yang ada

export function verifyToken(req: Request, res: Response, next: NextFunction) {
  const accesToken = req.cookies.accessToken;

  if (!accesToken) {
    res.status(401).json({ message: "Token is required" });
    return;
  }

  const payload = jwt.verify(accesToken, "superdupersecret");

  if (!payload) {
    res.status(401).json({ message: "Token verification failed" });
    return;
  }

  req.user = payload;

  next();
}

/* ------------------------------------ 2 ----------------------------------- */
export function roleGuard(...roles: string[]) {
  return async function (req: Request, res: Response, next: NextFunction) {
    const user = req.user;

    if (roles.includes(user.role)) {
      next();
      return;
    }

    res.status(403).json({ message: "Unauthorized access" });
  };
}
