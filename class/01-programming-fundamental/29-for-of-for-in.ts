/* -------------------------------------------------------------------------- */
/*                                   FOR OF                                   */
/* -------------------------------------------------------------------------- */
/* ---------------------------------- ARRAY --------------------------------- */
const someArray = [10, 20, 30, 40];

for (let i = 0; i < someArray.length; i++) {
  console.log(someArray[i]);
}

for (const el of someArray) {
  console.log(el);
}

for (const index in someArray) {
  console.log(index);
}

/* -------------------------------------------------------------------------- */
/*                                   FOR IN                                   */
/* -------------------------------------------------------------------------- */
const studentProfile = {
  name: "Angga Wicaksana",
  age: 20,
  gender: "Male",
  phone: "+628989097010",
};

for (const key in studentProfile) {
  console.log(key);
  console.log(studentProfile[key]);
}

console.log(studentProfile.name);
console.log(studentProfile["name"]);
