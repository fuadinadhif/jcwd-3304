/* -------------------------------------------------------------------------- */
/*                     Pass By Value vs Pass By Reference                     */
/* -------------------------------------------------------------------------- */

/* ------------------------------ Pass By Value ----------------------------- */
let num1 = 10;
num1 = 100;
let num2 = num1;
let num3 = num2;

console.log(num1);
console.log(num2);
console.log(num3);

num1 = 1000;

console.log(num1);
console.log(num2);
console.log(num3);

/* ---------------------------- Pass By Reference --------------------------- */
// Array
const array1 = [1, 2, 3];
const array2 = array1;
const array3 = array2;

console.log(array1);
console.log(array2);
console.log(array3);

array1[0] = 10;

console.log(array1);
console.log(array2);
console.log(array3);

// Object
const people = { name: "Jhonny", age: 70 };
const newPeople = people;

console.log(people);
console.log(newPeople);

people.name = "Angel";

console.log(people);
console.log(newPeople);
