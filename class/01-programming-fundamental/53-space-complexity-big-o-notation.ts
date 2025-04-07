/* -------------------------- Constant Space - O(1) ------------------------- */
function isEven(num: number): boolean {
  return num % 2 === 0;
}

/* --------------------------- Linear Space - O(n) -------------------------- */
function createArray(num: number): number[] {
  const result: number[] = [];

  for (let i = 0; i < num; i++) {
    result.push(i);
  }

  return result;
}

console.log(createArray(10));
console.log(createArray(5));
console.log(createArray(100));

/* ------------------------ Quadratic Space - O(n^2) ------------------------ */
const multiDimensionArray = [
  [1, 2],
  [3, 4],
];

const theArray: string[] = [];

let text = null;
let fullName: string = "John";
fullName = "Yohanes";
fullName = !text;
