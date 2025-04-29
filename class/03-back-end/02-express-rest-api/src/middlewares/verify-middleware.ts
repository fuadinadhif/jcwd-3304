import { Request, Response, NextFunction } from "express";

export function verifyMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers["authorization"];
  const authToken = "1234ABCDIlegal";

  if (!authHeader || authHeader !== authToken) {
    res.status(401).json({ message: "Unautorized access. Please login first" });
    return;
  }

  next();
}
