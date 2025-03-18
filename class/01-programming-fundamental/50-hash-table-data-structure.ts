/* --------------------------------- Object --------------------------------- */
interface StudentProfile {
  name: string;
  gender: string;
  age: number;
}

const studentProfileObj = {
  name: "David Beckham",
  gender: "Male",
  age: 38,
  90: "Hello",
};

console.log(studentProfileObj.name);
console.log(studentProfileObj.gender);
console.log(studentProfileObj.age);
console.log(studentProfileObj["age"]);
console.log(studentProfileObj[90]);

console.log(studentProfileObj);

/* ----------------------------------- Map ---------------------------------- */
const studentProfileMap = new Map();

console.log(studentProfileMap);

studentProfileMap.set("name", "David Beckham");
studentProfileMap.set("gender", "Male");
studentProfileMap.set("age", 38);
studentProfileMap.set(90, "Hello");
studentProfileMap.set("name", "Victoria Beckham");

console.log(studentProfileMap);

console.log(studentProfileMap.get("name"));
console.log(studentProfileMap.get("gender"));
console.log(studentProfileMap.get("age"));
