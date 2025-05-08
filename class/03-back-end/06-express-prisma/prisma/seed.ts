// Import PrismaClient untuk connect ke database
import { PrismaClient } from "../generated/prisma/index.js";

// Membuat koneksi ke database
const prisma = new PrismaClient();

const usersData = [
  {
    name: "Alice Smith",
    email: "alice@example.com",
    address: "123 Maple Street",
    age: 30,
    point: 100.5,
  },
  {
    name: "Bob Johnson",
    email: "bob@example.com",
    address: "456 Oak Avenue",
    age: 27,
    point: 85.0,
  },
  {
    name: "Carol White",
    email: "carol@example.com",
    address: null,
    age: 34,
    point: 120.75,
  },
  {
    name: "David Brown",
    email: "david@example.com",
    address: "789 Pine Road",
    age: 22,
    point: 60.3,
  },
  {
    name: "Eve Black",
    email: "eve@example.com",
    address: "321 Birch Lane",
    age: 29,
    point: 95.2,
  },
];

const productsData = [
  { name: "Wireless Mouse", price: 25.99, stock: 100, isExpired: true },
  { name: "Mechanical Keyboard", price: 79.99, stock: 50, isExpired: true },
  { name: "HD Monitor", price: 149.99, stock: 30, isExpired: true },
  { name: "USB-C Hub", price: 39.99, stock: 70, isExpired: true },
  { name: "Webcam 1080p", price: 59.99, stock: 20, isExpired: false },
  { name: "Bluetooth Speaker", price: 45.5, stock: 40, isExpired: false },
  { name: "External SSD 1TB", price: 129.99, stock: 25, isExpired: false },
  {
    name: "Noise Cancelling Headphones",
    price: 199.99,
    stock: 15,
    isExpired: true,
  },
  { name: "Smartwatch", price: 99.99, stock: 60, isExpired: true },
  { name: "Portable Charger", price: 22.49, stock: 80, isExpired: false },
];

// Fungsi untuk mengisi seed data
async function seed() {
  try {
    /* --------------------------------- Delete --------------------------------- */
    await prisma.user.deleteMany(); // Hapus semua baris data di table user
    await prisma.product.deleteMany();

    /* --------------------------------- Create --------------------------------- */
    await prisma.user.create({
      data: {
        name: "John Doe",
        email: "john.doe@mail.com",
        age: 17,
        point: 200,
        address: "Jl. Karet Belakang",
      },
    });
    await prisma.user.createMany({ data: usersData });
    await prisma.product.createMany({ data: productsData });
    console.log("Seeding complete 🌱");
  } catch (err) {
    console.error("Seeding failed ❌", err);
  } finally {
    await prisma.$disconnect(); // Untuk menutup koneksi ke database
  }
}

seed();
