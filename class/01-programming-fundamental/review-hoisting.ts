/* -------------------------------- Hoisting -------------------------------- */
// Fenomena yang terjadi di fase scanning JavaScript, di mana sebuah variable atau fungsi dinaikkan ke atas sebelum dieksekusi
// 1. Ketika kita membuat variable menggunakan var
// 2. Ketika kita membuat fungsi menggunakan function declaration

/* ------------------------------------ 1 ----------------------------------- */
console.log(laptop);
var laptop = "Mac";

/* ------------------------------------ 2 ----------------------------------- */
// Function declaration
console.log(sumTwo(10));

function sumTwo(num: number) {
  return num + 2;
}

console.log(sumTwo(10));

// Function expression
// console.log(sumThree(10));

const sumThree = function (num: number) {
  return num + 3;
};

console.log(sumThree(10));
