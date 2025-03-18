const arrayOfCity = [
  "Bogor",
  "Jakarta Barat",
  "Magelang",
  "Yogyakarta",
  "Solo",
  "Medan",
  "Yogyakarta",
  "Medan",
];

const setOfCity = new Set(arrayOfCity);
console.log(setOfCity);

const arrayOfUniqueCity = Array.from(setOfCity);
console.log(arrayOfUniqueCity);

/* ---------------------------- How to create Set --------------------------- */
const mySet = new Set();
console.log(mySet);

/* --------------------------- Add value to a Set --------------------------- */
mySet.add(10);
mySet.add(50);
mySet.add(25);
mySet.add(10);

console.log(mySet);

/* -------------------------- Check if value exist -------------------------- */
console.log(mySet.has(10));
console.log(mySet.has(100));

/* ------------------------- Delete value from a Set ------------------------ */
console.log(mySet);
mySet.delete(25);
console.log(mySet);
mySet.clear();
console.log(mySet);
