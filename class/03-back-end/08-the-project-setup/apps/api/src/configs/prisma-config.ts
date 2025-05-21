import { PrismaClient } from "../generated/prisma/index.js";

const globalThisPrisma = globalThis as unknown as { prisma?: PrismaClient };
export const prisma = globalThisPrisma.prisma || new PrismaClient();

globalThisPrisma.prisma = prisma;
