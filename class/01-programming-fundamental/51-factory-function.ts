/* ---------------------------- Factory Function ---------------------------- */
// Sebuah fungsi yang mengembalikan (me-return) sebuah object

function Product(paramName: string, paramPrice: number) {
  return {
    name: paramName,
    price: paramPrice,
  };
}

const apple = Product("Apple", 5000);
const banana = Product("Banana", 10000);

console.log(apple);
console.log(banana);
