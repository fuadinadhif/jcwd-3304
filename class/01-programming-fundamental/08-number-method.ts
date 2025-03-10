// 1. toString
const price = 1_000_000_000;
console.log(price.toString());

// 2. toExponential
const total = 12345;
console.log(total.toExponential()); // 1.2345 * 10 * 10 * 10 * 10

// 3. toFixed
const pi = 3.14159;
console.log(pi.toFixed(2));
console.log(pi.toFixed(3));
console.log(pi.toFixed());

// 4. Number
const record = "10";
console.log(Number("50000"));
console.log(Number(record));
