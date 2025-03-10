function multiplyTwo(num: number, num2, ...rest): number {
  console.log(rest);
  return num;
}

console.log(multiplyTwo(10, 20, 30, 30, 40));
