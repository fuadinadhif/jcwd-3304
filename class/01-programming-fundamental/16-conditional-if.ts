let age: number = 10.5;

// Bentuk 1
if (age >= 18) {
  console.log("You're and adult");
}

// Bentuk 2
if (age >= 18) {
  console.log("You're and adult");
} else {
  console.log("You're a child");
}

// Bentuk 3
if (age >= 70) {
  console.log("You're old");
} else if (age >= 18) {
  console.log("You're young");
} else if (age >= 5) {
  console.log("You're child");
} else {
  console.log("You're a baby");
}

// let password = "oldpass";

// if (password === "oldpass") {
//   console.log("You are IN!");
// } else {
//   console.log("OUT!");
// }

/* ----------------------------- Type Conversion ---------------------------- */
if (0) {
  console.log("Hello");
}

if ("") {
  console.log("Hello");
}

if (undefined) {
  console.log("Hello");
}

if (1) {
  console.log("Hello");
}

console.log("Program done");
