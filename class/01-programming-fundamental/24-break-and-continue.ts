// Break
let sum: number = 0;

while (true) {
  break;
  let value: number = 1;

  if (sum === 5) break;

  sum = sum + value;
  // sum += value;
}

console.log("Sum: " + sum);

// Continue
for (let i = 0; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
