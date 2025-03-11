// Mengubah vs Mengganti | Mutate vs Re-assign
// 1. Re-assign
let x = 10;
x = 20;

const y = 1000;
// y = 100;

// 2. Mutate
const theObject = { name: "John Doe", age: 70 };
const theArray = [1, 2, 3];

// theObject = { name: "Jane Smith", age: 35 };
// theArray = [10, 20, 30];

theObject.name = "Jane Smith";
theObject.age = 35;
console.log(theObject);

theArray[0] = 10;
theArray[1] = 20;
theArray[2] = 30;
console.log(theArray);
