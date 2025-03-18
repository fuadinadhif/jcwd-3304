// 1. False & True => Return false value
// 2. False 1 & False 2 => Return false 1 value
// 3. True 1 & True 2 => Return true 2 value
console.log(undefined && "HELLO");
console.log("HELLO" && undefined);
console.log(undefined && null);
console.log("HELLO" && 1000);

console.log(undefined || "HELLO");
console.log(undefined || null);
