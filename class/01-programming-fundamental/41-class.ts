class Greetings {
  name: string;
  word: string;

  constructor(parameterName: string, parameterWord: string) {
    this.name = parameterName;
    this.word = parameterWord;
  }

  greetingsDynamic() {
    return this.word + ", " + this.name;
  }
}

const greetingsOne = new Greetings("John", "Welcome");
const greetingsTwo = new Greetings("Angelina", "Hi");
const greetingsThree = new Greetings("Paryono", "Tumbas");
const greetingsFour = new Greetings("Budi", "Halo");
const greetingsFive = new Greetings("Dodol", "Salam");
const greetingsSix = new Greetings("Baskara", "He");

console.log(greetingsOne);
console.log(greetingsTwo);
console.log(greetingsThree);

console.log(greetingsOne.greetingsDynamic());
console.log(greetingsTwo.greetingsDynamic());
console.log(greetingsThree.greetingsDynamic());

// Without class
const sambutanOne = {
  name: "John",
  word: "Welcome",
  greetingsDynamic() {
    return this.word + ", " + this.name;
  },
};

const sambutanTwo = {
  name: "Angelina",
  word: "Hi",
  greetingsDynamic() {
    return this.word + ", " + this.name;
  },
};

const sambutanThree = {
  name: "Paryono",
  word: "Tumbas",
  greetingsDynamic() {
    return this.word + ", " + this.name;
  },
};

/* ----------------------------- Short Question ----------------------------- */
const apple = {
  name: "Apple",
  price: 10000,
  color: "Red",
};

const banana = {
  name: "Banana",
  price: 5000,
  color: "Yellow",
};

const Avocado = {
  name: "Avocado",
  price: 15000,
  color: "Green",
};

// 1. Buat sebuah Class dari struktur object di atas
class Fruit {
  name: string;
  price: number;
  color: string;

  constructor(paramName: string, paramPrice: number, paramColor: string) {
    this.name = paramName;
    this.price = paramPrice;
    this.color = paramColor;
  }
}

// 2. Buat 1 buah object, dengan property name = "Watermelon", price = 20000, color: "Red & Green" menggunakan Class yang sudah kita buat
const watermelonObj = new Fruit("Watermelon", 20000, "Red & Green");

const pineAppleObj = new Fruit("Pineapple", 17000, "Yellow");

console.log(watermelonObj);
