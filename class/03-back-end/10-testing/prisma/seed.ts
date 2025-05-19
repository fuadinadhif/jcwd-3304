import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

async function seed() {
  try {
    await prisma.user.deleteMany();
    await prisma.user.createMany({
      data: [
        {
          firstName: "John",
          lastName: "Doe",
          email: "john.doe@mail.com",
        },
        {
          firstName: "Jane",
          lastName: "Smith",
          email: "jane.smith2@mail.com",
        },
      ],
    });
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
