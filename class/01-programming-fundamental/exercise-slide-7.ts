// 1.
interface StudentData {
  name: string;
  email: string;
}

function mergeTwoArray(firstArray: StudentData[], secondArray: StudentData[]) {
  const result: StudentData[] = [];

  for (const el of firstArray) {
    result.push(el);
  }

  for (const el of secondArray) {
    // result: [
    // { name: "Student 1", email: "student1@mail.com" },
    // { name: "Student 2", email: "student2@mail.com" },
    // ];
    if (
      result.find((item) => {
        return item.name === el.name;
      })
    ) {
      continue;
    }

    result.push(el);
  }

  return result;
}

const argumenOne = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 2", email: "student2@mail.com" },
];
const argumenTwo = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 3", email: "student3@mail.com" },
];

console.log(mergeTwoArray(argumenOne, argumenTwo));

// 2.
function switchKeyValue(inputArray) {
  const result = inputArray.map((item) => {
    const keys = Object.keys(item);
    console.log(keys);
    const values = Object.values(item);
    console.log(values);

    return {
      [values[0] as string]: keys[0],
      [values[1] as string]: keys[1],
    };
  });

  return result;
}

console.log(
  switchKeyValue([
    { name: "David", age: 20 },
    { name: "John", age: 15 },
  ])
);

// 3.
// Loop Version
function findFactorialWithLoop(num: number) {
  let result: number = 1;

  for (let i = 1; i <= num; i++) {
    result = result * i;
  }

  return result;
}

// Recursion Version
function findFactorialWithRecursion(num: number) {
  if (num === 1) {
    return 1;
  }

  return num * findFactorialWithRecursion(num - 1);
}

console.log(findFactorialWithLoop(5));

/* ---------------------------------- Noted --------------------------------- */
const array = [1, 2, 3, 95];
console.log(array.find((item) => item === 90));

const mergeAnotherArray = () => {};

const someArray = [10, 20, 30];
console.log(
  someArray.map((item) => {
    return "Hallo";
  })
);

// someArray.map()
// someArray.filter()
// arrayOfStudents.find((student) => {});

// Loop 1
// item = 10

// Loop 2
// item = 20
