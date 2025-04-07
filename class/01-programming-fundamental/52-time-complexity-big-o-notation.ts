// 1. Big O => Worst Case => Big O(n)
// 2. Big Theta => Average Case => Big Theta(n)
// 3. Big Omega => Best Case => Big Omega(1)

function findElementIndex(target: number, inputArray: number[]) {
  let result: number = -1; // +1

  for (let i = 0; i < inputArray.length; i++) {
    if (target === inputArray[i]) {
      result = i;
      break;
    }
  } // +(4 * n)

  return result; // +1
}

// 1 + (4 * n) + 1
// 2 + 4 * n
// 6 * n
// n
// Big O(n) => Linear

const someArray = [10, 20, 30, 40, 50];
console.log(findElementIndex(10, someArray));

/* ----------------------------- Short question ----------------------------- */
// 1.
function someFunc(inputArray: number[]) {
  for (const el of inputArray) {
  } // n

  for (const el of inputArray) {
  } // n

  console.log("Hellooo"); // 1

  return "Hai"; // 1
}
// n + n + 1 + 1
// 2n + 2
// n + 2
// n => Big O(n) => Linear

// 2.
function anotherFunc(inputArray: number[]) {
  for (const el of inputArray) {
    for (const el of inputArray) {
    } // n1
  } // n1 * n2

  return undefined; // 1
}
// n * n + 1
// n^2 + 1
// n^2 => Big O(n^2) => Quadratic

// 3. Check if an elements is exist in an array
// 3.1
// function checkElement(inputArray: number[], target: number): boolean {
//   if (inputArray[0] === target) {
//     // 1
//     return true; // 1
//   } else if (inputArray[1] === target) {
//     // 1
//     return true; // 1
//   } else if (inputArray[2] === target) {
//     // 1
//     return true; // 1
//   } else if (inputArray[3] === target) {
//     // 1
//     return true; // 1
//   } else if (inputArray[4] === target) {
//     // 1
//     return true; // 1
//   } else {
//     // 1
//     return false; // 1
//   } // 1
// }
// 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1
// 12
// 1 => Big O(1) => Constant

// 3.2
// function checkElement(inputArray: number[], target: number): boolean {
//   for (let i = 0; i < inputArray.length; i++) {
//     if (inputArray[i] === target) {
//       return true;
//     }
//   }

//   return false;
// }
// Big O(n) => Linear

// 3.3
// function checkElement(inputArray: number[], target: number): boolean {
//   return inputArray.includes(target);
// }
// Big O(n) => Linear

// 3.4
function checkElement(inputArray: number[], target: number): boolean {
  const inputSet = new Set(inputArray);
  return inputSet.has(target);
}
// Big O(1) => Constant

console.log(checkElement([1, 2, 3, 4, 5], 5)); // true
console.log(checkElement([1, 2, 3, 4, 5], 10)); // false
console.log(checkElement([1, 2, 3, 4, 5], 50)); // false

// 4.
// function sumArray(inputArray: number[]): number {
//   let sum = 0;

//   for (const el of inputArray) {
//     sum = sum + el;
//   }

//   return sum;
// }
// Big O(n) => Linear

function sumArray(inputArray: number[]): number {
  // 1.1
  const [x1, x2, x3] = inputArray;
  return x1 + x2 + x3;

  // 1.2
  // return inputArray[0] + inputArray[1] + inputArray[2];

  // 1.3
  // return (
  //   (inputArray.length * (inputArray[0] + inputArray[inputArray.length - 1])) /
  //   2
  // );
}

console.log(sumArray([2, 2, 2])); // 6
console.log(sumArray([1, 2, 3])); // 6
console.log(sumArray([10, 20, 30])); // 60

/* ---------------------------------- Note ---------------------------------- */
function aFunc() {} // 100 + n
// n = 1000 => 1100 baris
// n = 10000 => 10100 baris
// n = 1000000 => 1000100 baris
// n = 1000000000 => 1000000100 baris

const array = [1, 2, 3, 4];
console.log(array.includes(4));

const numberSet = new Set([1, 2, 3, 4, 5]);
console.log(numberSet.has(5));

function findTarget(inputArray: number[], target) {
  if (inputArray[inputArray.length - 1] === target) {
    return true;
  }

  if (inputArray.length === 0) {
    return -1;
  }

  findTarget(inputArray.pop(), target);
}
