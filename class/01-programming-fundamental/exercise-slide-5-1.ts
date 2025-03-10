// 1.1
const array = [10, 20];
console.log(array.sort((a, b) => a - b));
console.log(
  array.reduce((acc, curr) => {
    return acc + curr;
  }, 0)
);

function getLowestHighestAverageArray(inputArray: number[]) {
  let lowest: number;
  let highest: number;
  let average: number;
  const sortedArray = inputArray.sort((a, b) => a - b);

  lowest = sortedArray[0];
  highest = sortedArray[sortedArray.length - 1];
  average =
    sortedArray.reduce((acc, curr) => acc + curr, 0) / sortedArray.length;

  return { lowest: lowest, highest: highest, average: average };
}

console.log(getLowestHighestAverageArray(array));

// 1.2
function getLowestHighestAverageArrayWithoutSort(inputArray: number[]) {
  let total: number = 0;

  for (let j = 0; j < inputArray.length; j++) {
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i] > inputArray[i + 1]) {
        const temp = inputArray[i];
        inputArray[i] = inputArray[i + 1];
        inputArray[i + 1] = temp;
      }
    }
  }

  for (let i = 0; i < inputArray.length; i++) {
    total = total + inputArray[i];
  }

  return {
    lowest: inputArray[0],
    highest: inputArray[inputArray.length - 1],
    average: total / inputArray.length,
  };
}

console.log(getLowestHighestAverageArrayWithoutSort([10, 5, 15]));

/*
LOOP 1
i: 0
array: [20, 10, 15]

array[i] = [0] = 20
array[i + 1] = [0 + 1] = [1] = 10

temp = array[0] => 20
array[0] = array[1] => 10
array[1] = temp => 20

array: [10, 20, 15]

----------------------------------------

LOOP 2
i: 1
array: [10, 20, 15]

array[i] = [1] = 20
array[i + 1] = [2] = 15

temp = array[i] = array[1] => 20
array[1] = array[2] => 15
array[2] = temp => 20

array: [10, 15, 20]
*/

// 2.
function concatenateArray(inputArray: string[]) {
  inputArray[inputArray.length - 1] =
    "and " + inputArray[inputArray.length - 1];

  return inputArray.join(",");
}

console.log(
  concatenateArray(["apple", "banana", "cherry", "date", "watermelon"])
);

// 3.
function getSecondSmallestArray(inputArray: number[]) {
  // const sortedArray = inputArray.sort((a, b) => a - b);
  const sortedArray = inputArray.sort((a, b) => {
    return a - b;
  });

  return sortedArray[1];
}

console.log(getSecondSmallestArray([0, 1, 20, 30, 9000, 50, 60, 70]));

// 4.
function sumTwoArray(array1: number[], array2: number[]) {
  let result: number[] = [];
  for (let i = 0; i < array2.length; i++) {
    result[i] = array1[i] + array2[i];
  }

  return result;
}

console.log(sumTwoArray([1, 2, 3], [3, 2, 1]));

// 5.
function addElementIfNotExist(array: number[], newElement: number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === newElement) {
      return array;
    }
  }

  array.push(newElement);
  return array;
}

console.log(addElementIfNotExist([1, 2, 3], 4));

/*
LOOP 1
i: 0
array[0] = 1
1 === 3 => false
array: [1, 2, 3]

LOOP 2
i: 1
array[1] = 2
2 === 3 => false
array: [1, 2, 3]

LOOP 3
i: 2
array[2] = 3
3 === 3 => true
array: [1, 2, 3]

return [1, 2, 3]
*/

/*
LOOP 1
i: 0
array[0] = 1
1 === 4 => false
array: [1, 2, 3]

LOOP 2
i: 1
array[1] = 2
2 === 4 => false
array: [1, 2, 3]

LOOP 3
i: 2
array[2] = 3
3 === 4 => true
array: [1, 2, 3]

LOOP ENDED

array.push(4)
array: [1, 2, 3, 4]
return [1, 2, 3, 4]
*/

/* -------------------------------------------------------------------------- */
/*                                    Note                                    */
/* -------------------------------------------------------------------------- */
const someArray = [1, 2, 3];
console.log(someArray[1]);
someArray[1] = 500;
console.log(someArray[1]);
console.log(someArray);
someArray[4] = 3000;
console.log(someArray);
