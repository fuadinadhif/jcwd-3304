import { JwtPayload } from "jsonwebtoken";

interface Payload extends JwtPayload {
  name: string;
  username: string;
  email: string;
  role: string;
}

declare namespace Express {
  export interface Request {
    user?: Payload;
  }
}
