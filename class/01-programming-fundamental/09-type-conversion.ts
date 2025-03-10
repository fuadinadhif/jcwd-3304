// 1. String Conversion
console.log(String(123));
console.log(String(null));
console.log(String(undefined));
console.log(String({ name: "Angelina" }));
console.log(String("Angelina"));
console.log(String([1, "Angelina", 2, 3]));

// 2. Number Conversion
console.log(Number("123"));
console.log(Number("123!"));
console.log(Number([1, 2, 3]));
console.log(Number({ name: "Angelina" }));

// 3. Boolean Conversion
// Falsy Values
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

// Truthy Values
console.log(Boolean({ name: "Angelina" }));
console.log(Boolean([1, 2, 3]));
console.log(Boolean(123));
console.log(Boolean(-123));
console.log(Boolean("abc"));
// ...
