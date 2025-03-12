// 1.
const arrayOfStudent = [
  {
    name: "Budiarto",
    age: new Date("2009-01-01"),
    email: "budiarto@mail.com",
    score: 70,
  },
  {
    name: "Anto",
    age: new Date("2007-01-01"),
    email: "anto@mail.com",
    score: 80,
  },
  {
    name: "Tono",
    age: new Date("2011-01-01"),
    email: "tono@mail.com",
    score: 50,
  },
];

function findHighestLowestAvgData(inputArray) {
  let highestScore = -Infinity;
  let highestAge = -Infinity;
  let lowestScore = Infinity;
  let lowestAge = Infinity;
  let totalScore = 0;
  let totalAge = 0;

  for (const el of inputArray) {
    let currentAge = new Date().getFullYear() - el.age.getFullYear();
    totalScore = totalScore + el.score;
    totalAge = totalAge + currentAge;

    if (el.score > highestScore) {
      highestScore = el.score;
    }

    if (currentAge > highestAge) {
      highestAge = currentAge;
    }

    if (el.score < lowestScore) {
      lowestScore = el.score;
    }

    if (currentAge < lowestAge) {
      lowestAge = currentAge;
    }
  }

  // for (const age of inputArray) {
  //   if (age.age > highestAge) {
  //     highestAge = age.age;
  //   }
  // }

  return {
    score: {
      highest: highestScore,
      lowest: lowestScore,
      average: (totalScore / inputArray.length).toFixed(2),
    },
    age: {
      highest: highestAge,
      lowest: lowestAge,
      average: (totalAge / inputArray.length).toFixed(2),
    },
  };
}

console.log(findHighestLowestAvgData(arrayOfStudent));

// 2.
class TheProduct {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

const rice = new TheProduct("Rice", 15000);
const cookingOil = new TheProduct("Cooking Oil", 14000);

console.log(rice);
console.log(cookingOil);

class TheTransaction {
  total: number = 0;
  cart: { name: string; price: number; quantity: number }[] = [];

  addToCart(product: { name: string; price: number; quantity: number }) {
    this.cart.push(product);
    this.total = this.total + product.price * product.quantity;
  }

  showTotal() {
    return this.total;
  }
}

const transaction = new TheTransaction();

console.log(transaction.cart);
console.log(transaction.total);

transaction.addToCart({ name: rice.name, price: rice.price, quantity: 10 });
transaction.addToCart({
  name: cookingOil.name,
  price: cookingOil.price,
  quantity: 5,
});
transaction.addToCart({ name: rice.name, price: rice.price, quantity: 5 });

console.log(transaction.cart);
console.log(transaction.total);

/* ---------------------------------- Note ---------------------------------- */
