/* -------------------------------------------------------------------------- */
/*                               Array Creation                               */
/* -------------------------------------------------------------------------- */
const array1 = [];
const array2 = new Array();

console.log(array1);
console.log(array2);
console.log(array1.length);
console.log(array2.length);

const array3 = [1, 2, 3, 4, 5];
const array4 = new Array(1, 2, 3, 4, 5);

console.log(array3);
console.log(array4);
console.log(array3.length);
console.log(array4.length);

const array5 = [
  {
    name: "John Doe",
    address: {
      street: "Wall Street",
      city: "New York",
      state: "Texas",
    },
  },
  {
    name: "Jane Smith",
    address: {
      street: "Roof Street",
      city: "New York",
      state: "Texas",
    },
  },
  ,
];
const array6 = [
  null,
  undefined,
  false,
  1,
  "A",
  { name: "Budi" },
  [1, 2, 3],
  "$",
];

/* -------------------------------------------------------------------------- */
/*                           Accessing Array Element                          */
/* -------------------------------------------------------------------------- */
const array7 = [1, 2, 3, 4, 5];
console.log(array7[3]);

const array8 = ["A", undefined, "B", null];
console.log(array8[1]);

const array9 = ["A", "B", ["C", "D", ["E"]]];
console.log(array9[0]);
console.log(array9[2][0]);
console.log(array9[2][2][0]);

/* -------------------------------------------------------------------------- */
/*                            Array Built In Method                           */
/* -------------------------------------------------------------------------- */
// .push()
const array10 = ["A", "B", "C", "D"];
array10.push("E");
console.log(array10);

// .pop()
const array11 = ["A", "B", "C", "D"];
array11.pop();
console.log(array11);

// .unshift()
const array12 = ["A", "B", "C", "D"];
array12.unshift("0");
console.log(array12);

// .shift()
const array13 = ["A", "B", "C", "D"];
array13.shift();
console.log(array13);

// .toString()
const array14 = [1, 2, 3];
console.log(array14.toString());

// .join()
const array15 = [1, 2, 3];
console.log(array15.join("-"));

// .concat()
const array16: number[] = [1, 2, 3];
const array17: string[] = ["A", "B", "C"];
const array18: (number | string)[] = array16.concat(array17);
console.log(array18);

// .slice()
// Behaviour-nya seperti copy. Jadi tidak mengubah nilai array aslinya
const array19 = ["Jan", "Feb", "March", "April", "June"];
const sliceResult = array19.slice(1, 4);
console.log(array19);
console.log(sliceResult);

// .splice()
// Behaviour-nya seperti cut. Dia akan mengubah nilai array aslinya
const array20 = ["Jan", "Feb", "March", "April", "June"];
const spliceResult = array20.splice(1, 3);
console.log(array20);
console.log(spliceResult);

const array21 = ["Jan", "March", "April", "June"];
console.log(array21.splice(1, 3, "Feb", "March", "April", "May", "June"));
console.log(array21);

// .indexOf
const array22 = [2, 3, 6, 1, 90, 1000, 100, 23, 3];
console.log(array22.indexOf(90));
console.log(array22.indexOf(55));
console.log(array22.indexOf(3));

// .lastIndexOf
const array23 = [2, 3, 6, 1, 90, 1000, 100, 23, 3];
console.log(array23.lastIndexOf(90));
console.log(array23.lastIndexOf(55));
console.log(array23.lastIndexOf(3));

// .reverse()
const array24 = [3, 2, 1];
console.log(array24.reverse());

// .sort()
const array25 = [10, 9, 2, 11];
console.log(array25.sort());
console.log(
  array25.sort(function (a, b) {
    return b - a;
  })
);

/*
Loop 1
1. Loop 1.1
a: 10
b: 9
return: 1
array: [9, 10, 2, 11]

2. Loop 1.2
a: 10
b: 2
return: 8
array: [9, 2, 10, 11]

3. Loop 1.3
a: 10
b: 11
return -1
array: array: [9, 2, 10, 11]

4. Loop 1.4
a: 11
b: undefined
result: NaN
array: array: [9, 2, 10, 11]

Loop 2
*/

// .map()
const array26 = [1, 2, 3];
console.log(
  array26.map((item, index, array) => {
    return item + 2;
  })
);
console.log(
  array26.map((item, index, array) => {
    if (index >= 2) {
      return item + 2;
    }
  })
);
console.log(
  array26.map((jakarta, bsd) => {
    if (bsd >= 2) {
      return jakarta + 2;
    }
  })
);

/*
LOOP 1
item: 1
index: 0
array: [1, 2, 3]
return: 3
result: [3]

LOOP 2
item: 2
index: 1
array: [1, 2, 3]
return: 4
result: [3, 4]

LOOP 3
item: 3
index: 2
array: [1, 2, 3]
return: 5
result: [3, 4, 5]
*/

// .filter()
const array27 = [5, 6, 7, 10, 9, 2, 3, 4, 5, 5, 5, 5];
console.log(
  array27.filter((item) => {
    if (item === 5) {
      return false;
    } else {
      return true;
    }
  })
);

// .find()
const array28 = ["Nadhif", "Uus", "Radit", "Jegel", "Desta"];
console.log(
  array28.find((item) => {
    return item === "Desta";
  })
);

// .reduce()
const array29 = [1, 2, 3];
console.log(
  array29.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0)
);

/*
LOOP 1
accumulator: undefined
currentValue: 0
return: 0

LOOP 2
accumulator: 0
currentValue: 1
return: 1

LOOP 3
accumulator: 1
currentValue: 2
return: 3

LOOP 4
accumulator: 3
currentValue: 3
return: 6
*/

// .includes()
const array30 = [
  "Angelina",
  "Gayus",
  "Pertamax",
  "Setnov",
  "Harvein",
  "Batubara",
];
console.log(array30.includes("Megawati"));
console.log(array30.includes("Setnov"));
console.log(array30.includes("Batubara"));
console.log(array30.includes("SBY"));
