// Array Desctructure - Patokannya adalah posisi variable yang kita buat
const thisArray = [10, 20, 30];

// const a = thisArray[0];
// const b = thisArray[1];
// const c = thisArray[2];

const [a, b, c] = thisArray;

console.log(a);
console.log(b);
console.log(c);

// Object Destructure - Patokannya adalah nama variable yang kita buat
const thisStudent = {
  fullname: "Antony The Goat",
  age: 25,
  club: "Real Betis",
};

// const d = thisStudent.fullname;
// const e = thisStudent.age;
// const f = thisStudent.club;

// With Alias
const { age: d, club: e, fullname: f } = thisStudent;
// Without Alias
const { age, club, fullname } = thisStudent;

console.log(d);
console.log(e);
console.log(f);

console.log(fullname);
console.log(age);
console.log(club);

/* ----------------------------- Short Question ----------------------------- */
const array = [30, 40, 50];
const object = { brand: "Honda", km: 50000, color: "black" };

// 1. Destructure array variable ke dalam variable satu, dua, dan tiga
const [satu, dua, tiga] = array;
console.log(satu);
console.log(dua);
console.log(tiga);

// 2. Destructure object variable ke dalam variable brand, km, dan color
const { brand, km, color } = object;
console.log(brand);
console.log(km);
console.log(color);

// 2. Destructure object variable ke dalam variable ab isinya adalah value property brand, bc isinya adalah value property km, dan cd isinya adalah value property color
const { brand: ab, km: bc, color: cd } = object;
console.log(ab);
console.log(bc);
console.log(cd);
