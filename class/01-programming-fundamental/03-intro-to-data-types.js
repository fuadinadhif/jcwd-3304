/* -------------------------------------------------------------------------- */
/*                            Primitive Data Types                            */
/* -------------------------------------------------------------------------- */
// Number
const age = 50;

// String
const postalCode = "55284";
const phoneNumber = "+628989097010";

// Boolean
let isLoading = true;
isLoading = false;

// Null
let score = null;
score = 5;
score = null;

// Undefined
let address;
console.log(address);
let name = undefined;
name = "John Doe";

/* -------------------------------------------------------------------------- */
/*                          Non Primitive Data Types                          */
/* -------------------------------------------------------------------------- */
// Object
const studentName = "Angelina Sondakh";
console.log(studentName);
const studentAge = 45;
const studentAddress = "Gatot Subroto";
const studentGender = "Female";

const studentObject = {
  age: 45,
  name: "Angelina Sondakh",
  address: "Gatot Subroto",
  gender: "Female",
};
console.log(studentObject.name);

// Array
const song1 = "Katty Perry";
const song2 = "Ed Sheeran";
const song3 = "Michael Jackson";

const songArray = ["Katty Perry", "Ed Sheeran", "Michael Jackson"];
console.log(songArray[0]);
console.log(songArray[2]);
console.log(songArray[3]);

/* -------------------------------------------------------------------------- */
/*                               Typeof Keyword                               */
/* -------------------------------------------------------------------------- */
console.log(typeof 50);
console.log(typeof "Hari ini cerah");
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof false);
console.log(typeof true);
console.log(typeof {});
console.log(typeof []);
