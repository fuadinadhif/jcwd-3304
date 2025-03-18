// Outer Scope
const movie = "Dejavu";
let title = "John Wick";

console.log(movie);
console.log(title);
// console.log(brand);
// console.log(publishing);
console.log(organ);

{
  // Inner Scope Lv 1
  const brand = "BMW";
  var organ = "Liver";
  console.log(brand);
  // console.log(publishing);

  {
    // Inner Scope Lv 2
    const publishing = "Gramedia";
    console.log(brand);
    console.log(publishing);
  }
}

// console.log(brand);
console.log(organ);

/* ------------------------------- Block Scope ------------------------------ */
// How to access block scoped variable
// 1. Akses variabel tersebut di level scope yang sama, atau
// 2. Akses variabel tersebut di level scope yang lebih dalam
// 3. Akses variabel hanya ketika variabel sudah dibuat
if (true) {
}
function someFunc() {}
class SomeClass {}
for (let i = 0; i < 10; i++) {}
{
}
