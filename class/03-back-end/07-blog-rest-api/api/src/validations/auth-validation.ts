import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(30, "Name cannot be more than 30 characters"),
  email: z.string().email("Invalid email address"),
  username: z
    .string()
    .min(4, "Username must be at least 4 characters")
    .max(20, "Username cannot be more than 20 characters"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .regex(/[a-z]/, "Password must contain one lowercase letter")
    .regex(/[A-Z]/, "Password must contain one uppercase letter")
    .regex(/[0-9]/, "Password must contain one number")
    .regex(/[^A-Za-z0-9]/, "Password must contain one symbol"),
});
