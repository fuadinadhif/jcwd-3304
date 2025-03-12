/* -------------------------------------------------------------------------- */
/*                               Original Shape                               */
/* -------------------------------------------------------------------------- */
// class Product {
//   productName: string;
//   price: number;

//   constructor(productName: string, price: number) {
//     this.productName = productName;
//     this.price = price;
//   }
// }

// class Book {
//   productName: string;
//   price: number;
//   author: string;

//   constructor(productName: string, price: number, author: string) {
//     this.productName = productName;
//     this.price = price;
//     this.author = author;
//   }
// }

// class Fruit {
//   productName: string;
//   price: number;
//   expiredDate: Date;

//   constructor(productName: string, price: number, expiredDate: Date) {
//     this.productName = productName;
//     this.price = price;
//     this.expiredDate = expiredDate;
//   }
// }

/* -------------------------------------------------------------------------- */
/*                             Inherintence Shape                             */
/* -------------------------------------------------------------------------- */
class Product {
  productName: string;
  price: number;

  constructor(productName: string, price: number) {
    this.productName = productName;
    this.price = price;
  }
}

class Book extends Product {
  author: string;

  constructor(productName: string, price: number, author: string) {
    super(productName, price);
    this.author = author;
  }
}

class Fruit extends Product {
  expiredDate: Date;

  constructor(productName: string, price: number, expiredDate: Date) {
    super(productName, price);
    this.expiredDate = expiredDate;
  }
}

const negeriLimaMenara = new Book("Negeri Lima Menara", 50000, "Akhmad Fuadi");
console.log(negeriLimaMenara);

const manggo = new Fruit("Manggo", 15000, new Date("2025-03-13"));
console.log(manggo);
