/* -------------------------------- Equal To -------------------------------- */
// 1. Double equal | Loose equal
console.log(1 == 1);
console.log("a" == "a");
console.log("1" == 1);
console.log({} == 1);

// 2. Triple equal | Strict equal
console.log("1" === 1);

console.log(Number({}));
console.log(Number("1"));

/* ------------------------------ Not Equal To ------------------------------ */
console.log(10 != 1);
console.log("1" != 1);
console.log({} != 1);

/* ------------------------------ Greater Than ------------------------------ */
console.log(10 > 5);
console.log(-10 > 5);

/* -------------------------------- Less Than ------------------------------- */
const result = 10 < 5;
console.log(result);
console.log(-10 < 5);
console.log(5 < 5);

/* ------------------------ Less Than or Equal To ------------------------ */
console.log(10 <= 5);
console.log(-10 <= 5);
console.log(5 <= 5);
