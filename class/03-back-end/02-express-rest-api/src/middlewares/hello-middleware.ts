import { Request, Response, NextFunction } from "express";

export function helloMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log("Hello!");
  next();
}
