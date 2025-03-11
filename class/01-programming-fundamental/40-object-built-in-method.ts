// 1. Object.Assign()
const target = { a: 1, b: 2 };
const source1 = { b: 4, c: 5 };
const source2 = { d: 14, e: 50 };

const returnedTargetWithAssign = Object.assign(target, source1, source2);
const returnedTargetWithSpread = { ...target, ...source1, ...source2 };

console.log(returnedTargetWithAssign);
console.log(returnedTargetWithSpread);

// 2. Object.keys()
const employeeData = {
  salary: 1000,
  position: "Manager",
  name: "Prabowo",
  address: {
    street: "First St.",
    province: "Zimbabwe",
  },
};

const employeeDataKey = Object.keys(employeeData);
console.log(employeeDataKey);

// 3. Object.values()
const employeeDataValue = Object.values(employeeData);
console.log(employeeDataValue);

// 4. Object.entries()
const employeeDataEntrie = Object.entries(employeeData);
console.log(employeeDataEntrie);

// 5. Object.freeze()
interface JustObjectInterface {
  a: number;
  b: number;
  c: number;
  d?: number;
  e?: number;
  f?: number;
}

const justObject: JustObjectInterface = { a: 1, b: 2, c: 3 };
console.log(justObject);

justObject.d = 3;

console.log(justObject);

justObject.e = 4;

Object.freeze(justObject); // Non Editable

justObject.f = 5;

console.log(justObject);
