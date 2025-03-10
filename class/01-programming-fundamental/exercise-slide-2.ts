// 1.
let number: number = 25;
let result: string = "";

if (number % 2 === 0) {
  result = "Even";
} else {
  result = "Odd";
}

// console.log(result);

// 2.
// - Bukan 1
// - Hanya habis dibagi 1 atau bilangan itu sendiri
let number1: number = 4;
let result1: string = "Prime";
for (let i = 0; i < number1; i++) {
  if (number1 % i === 0 && i !== 1) {
    result1 = "Not Prime";
    break;
  }
}

// console.log(result1);

// 3.
let number3: number = 3;
let result2: number = 0;
for (let i = 0; i <= number3; i++) {
  result2 = result2 + i;
}

// console.log(result2);

// 4.
let number4: number = 6;
let result3: number = 1;
for (let i = 1; i <= number4; i++) {
  result3 = result3 * i;
}

// console.log(result3);

// 5.
let number5: number = 10;
let a = 0;
let b = 1;
let next = 0;
let result4 = 0;

if (number5 <= 0) {
  result4 = 0;
} else if (number5 === 1) {
  result4 = 1;
} else {
  for (let i = 2; i <= number5; i++) {
    next = a + b;
    a = b;
    b = next;
  }
  result4 = next;
}

console.log(result4);

/* ---------------------------------- Note ---------------------------------- */
// console.log(100 % 10);
// console.log(105 % 10);
// console.log(9 % 2);
// console.log(7 % 2);
// console.log(3 % 0);

if (false) {
  // console.log(1000);
} else {
  // console.log(10);
}
