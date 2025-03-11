/* ---------------------------------- ARRAY --------------------------------- */
// Fungsi Pertama - Deep Copy/Meng-copy dan membuat referensi array baru. Sehingga array lama dan array baru punya referensi yang berbeda
const theArray = [100, 200, 300];
const theArrayCopy1 = theArray;
const theArrayCopy2 = [...theArray];

console.log(theArray);
console.log(theArrayCopy1);
console.log(theArrayCopy2);

theArray[0] = 10;

console.log(theArray); // [10, 200, 300]
console.log(theArrayCopy1); // [100, 200, 300]
console.log(theArrayCopy2); // [100, 200, 300]

// 2. Fungsi Kedua - Menggabungkan sebuah array dengan array/value yang lain
const kingArray = [50, 80, 120];
const kingArrayPlusSatu = [...kingArray, 10, 20, 30];
const kingArrayPlusDua = [...kingArray, [1, 2, 3]];
const kingArrayPlusTiga = [...kingArray, ...[1, 2, 3]];

console.log(kingArrayPlusSatu);
console.log(kingArrayPlusDua);
console.log(kingArrayPlusTiga);

/* --------------------------------- OBJECT --------------------------------- */
const theObjectSatu = { name: "John Doe", age: 70 };
const theObjectDua = { weight: 80, height: 180 };
const theObjectTiga = { ...theObjectSatu, ...theObjectDua };

console.log(theObjectTiga);

/* ---------------------------------- Note ---------------------------------- */
function someFunc(param1: number, ...rest) {}
function otherFunc(param1: number, ...abc) {}

/* ----------------------------- Short Question ----------------------------- */
const kingObjectOne = { name: "King George II", age: 700 };
const kingObjectTwo = { gender: "Male" };

// 1. Combine kingObjectOne dengan kingObjectTwo dan letakkan valuenya di dalam variable kingObjectThree
const kingObjectThree = { ...kingObjectOne, ...kingObjectTwo };
console.log(kingObjectThree);

// 2. Combine kingObjectOne dengan kingObjectTwo dan letakkan valuenya di dalam variable kingObjectFour dan tambah property weight: 100
const kingObjectFour = { ...kingObjectOne, ...kingObjectTwo, weight: 100 };
console.log(kingObjectFour);

// 3. Combine kingObjectOne dengan kingObjectTwo dan letakkan valuenya di dalam variable kingObjectFive dan ubah namanya dari King George II menjadi King William I
const kingObjectFive = {
  ...kingObjectOne,
  ...kingObjectTwo,
  name: "King William I",
};
console.log(kingObjectFive);
