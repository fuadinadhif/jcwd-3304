// 1.
// function printTriangle(height: number) {
//   let result = "";

//   for (let i = 0; i < height; i++) {
//     for (let j = 0; j <= i; j++) {
//       result = result + i + "\n";
//       console.log(result);
//     }
//   }

//   return result;
// }

function printTriangle(height: number) {
  let result = "";
  let count = 1;

  for (let i = 0; i < height; i++) {
    for (let j = 0; j <= i; j++) {
      if (count < 10) {
        // result = result + "0" + count;
        result = `${result} 0${count}`;
      } else {
        // result = result + count;
        result = `${result} ${count}`;
      }
      count++;
    }

    result = result + "\n";
  }

  return result;
}

console.log(printTriangle(15));
// console.log("" + 0);
// console.log("0" + 1);
// console.log("01" + 2);
// console.log("012" + 3);
