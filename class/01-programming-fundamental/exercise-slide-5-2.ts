// 1.
function sumOnlyNumber(
  inputArray: (number | string | boolean | undefined | null)[]
): number {
  let result: number = 0;

  for (const num of inputArray) {
    if (typeof num === "number") {
      result = result + num;
    }
  }

  return result;
}

console.log(sumOnlyNumber(["1", 1, null, undefined, 2]));

/*
LOOP 1
num: "1"
typeof "1" === "number" ? FALSE
result = 0

LOOP 2
num: 1
typeof 1 === "number" ? TRUE
result = 0 + num = 0 + 1 = 1

LOOP 3
num: null
typeof null === "number" ? FALSE
result = 1

LOOP 4
num: undefined
typeof undefined === "number" ? FALSE
result = 1

LOOP 5
num: 2
typeof 2 === "number" ? TRUE
result = 1 + num = 1 + 2 = 3

LOOP ENDED

return result 
return 3
*/

console.log(typeof null === "number");
console.log(typeof undefined === "number");

// 2.
function insertIntegerToArray(maxSize: number, ...rest: number[]): number[] {
  return rest.slice(0, maxSize);
}

console.log(insertIntegerToArray(5, 1, 2, 3, 4, 10, 20, 100, 20, 10));
console.log(insertIntegerToArray(5, 10, 50, 40, 20, 25, 60));
console.log(insertIntegerToArray(2, 10, 50, 40));

// 3.
function concatArray(array1: number[], array2: number[]): number[] {
  // return array1.concat(array2);
  return [...array1, 100, 200, ...array2];
}

console.log(concatArray([1, 2, 3], [4, 5, 6]));

// 4.
function findDuplicate(inputArray: number[]): number[] {
  const countMap = {};
  const duplicate: number[] = [];

  // console.log(countMap[1]);

  for (const num of inputArray) {
    if (countMap[num] === undefined) {
      countMap[num] = 1;
    } else {
      countMap[num]++;
    }
  }

  console.log(countMap);

  for (const key in countMap) {
    console.log(key);
    console.log(countMap[key]);
    if (countMap[key] > 1) {
      duplicate.push(Number(key));
    }
  }

  return duplicate;
}

console.log(findDuplicate([1, 1, 2, 3, 3, 4, 5, 5]));

/* -------------------------------------------------------------------------- */
/*                                    NOTE                                    */
/* -------------------------------------------------------------------------- */
// 1. keyword => function
// 2. parameter => ()
// 3. body => {}

function someFunction(): number {
  return [];
}

const array1 = [10, 20, 30];
const array2 = [40, 50, 60];
console.log(array1.concat(array2));

const peopleProfile = { name: "John Doe", age: 10 };
console.log(peopleProfile.name);
console.log(peopleProfile["name"]);
