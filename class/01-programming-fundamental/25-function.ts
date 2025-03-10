/* -------------------------------------------------------------------------- */
/*                            Function Declaration                            */
/* -------------------------------------------------------------------------- */
// 1.
function square(num: number) {
  return num * num;
}

const x: number = square(4);
console.log(x);

// 2.
function calculateRectangleArea(length: number, width: number) {
  return length * width;
}

const rectangleArea1 = calculateRectangleArea(10, 5);
const rectangleArea2 = calculateRectangleArea(1, 5);
const rectangleArea3 = calculateRectangleArea(100, 5);
const rectangleArea4 = calculateRectangleArea(20, 4);

console.log(rectangleArea1);
console.log(rectangleArea2);
console.log(rectangleArea3);
console.log(rectangleArea4);

// 3.
function greetings(name: string) {
  return `Hi, ${name}!`;
  return `Salam, ${name}!`;
  return `Hello, ${name}!`;
}

const greetResult = greetings("Alfian");
console.log(greetResult);

/* -------------------------------------------------------------------------- */
/*                             Function Expression                            */
/* -------------------------------------------------------------------------- */
// function cmToKm(num: number) {
//   return num / 100000;
// }
const cmToKm = function (num: number) {
  return num / 100000;
};

/* -------------------------------------------------------------------------- */
/*                               Arrow Function                               */
/* -------------------------------------------------------------------------- */
// 1.
// const grToKg = (weight: number) => {
//   return weight / 1000;
// };

// 2.
const grToKg = (weight: number) => weight / 1000;
const grToKgResult = grToKg(20);
console.log(grToKgResult);

/* -------------------------------------------------------------------------- */
/*                            Higher Order Function                           */
/* -------------------------------------------------------------------------- */
/* ------- Fungsi yang menerima atau mengembalikan sebuah fungsi lain ------- */
function example(callback) {
  const result = callback();
  return result;
}
const exampleResult = example(function inside() {
  return "Higher Order";
});
console.log(exampleResult);

/* 1. 
function example(callback) {
  const result = callback();
  return result;
}
*/

/* 2. 
function example(inside) {
  const result = callback();
  return result;
}
*/

/* 3. 
function example(inside) {
  const result = inside();
  return result;
}
*/

/* 3. 
function example(inside) {
  const result = "Higher Order";
  return result;
}
*/

/* -------------------------------------------------------------------------- */
/*                          Function is just a value                          */
/* -------------------------------------------------------------------------- */
const a = "A";
const b = 1;
const c = null;
const d = undefined;
const e = false;
const f = [];
const g = {};

function aFunc(str: string) {
  return str;
}

function eFunc(bool: Boolean) {
  return bool;
}

function gFunc(obj: Object) {
  return obj;
}

console.log(aFunc("ABC"));
console.log(eFunc(true));
console.log(gFunc({ name: "Nadhif" }));

console.log(typeof "a");
console.log(typeof 1);
console.log(typeof 10);
console.log(typeof false);
console.log(typeof function x() {});
console.log(typeof null);

function cubic(num) {
  return num * num * num;
}

cubic(10);
console.log(cubic);
cubic.gender = "Binary";
console.dir(cubic);

const studentProfile = {
  name: "Aldo",
  age: 20,
};

// studentProfile();
console.log(studentProfile);
console.log(studentProfile.name);
studentProfile.name = "Budi";
console.log(studentProfile.name);
studentProfile.gender = "Male";
console.log(studentProfile);
