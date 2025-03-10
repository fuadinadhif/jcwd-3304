{
  // 1.
  const num: number = 10;
  // console.log(`${num} x 1`);
  // console.log(`${num} x 2`);
  // console.log(`${num} x 3`);
  // console.log(`${num} x 4`);
  // console.log(`${num} x 5`);
  // console.log(`${num} x 6`);
  // console.log(`${num} x 7`);
  // console.log(`${num} x 8`);
  // console.log(`${num} x 9`);
  // console.log(`${num} x 10`);
  for (let i = 1; i <= 100; i++) {
    // console.log(`${num} x ${i}`);
  }

  const fullName: string = "Agung Sedayu";
  // console.log(`Halo!, ${fullName}`);
  // console.log("Halo!, ${fullName}");
}

{
  // 2.
  // - Split (String Method): Memisahkan string menjadi array berdasarkan parameter pemisah yang kita tentukan
  // - Reverse (Array Method): Memutar balik susunan sebuah array
  // - Join (Array Method): Menggabungkan array menjadi sebuah string berdasarkan parameter penggabung yang kita tentukan
  const originalText: string = "Madam";
  const reverseText: string = originalText.split("").reverse().join("");

  // console.log(originalText);
  // console.log(reverseText);

  if (originalText.toLowerCase() === reverseText.toLowerCase()) {
    // console.log("Palindrome!");
  } else {
    // console.log("Not palindrome!");
  }
}

{
  // 3.
  let centimeter = 100;
  let result = "";

  if (centimeter / 100000 >= 1) {
    result = centimeter / 100000 + " " + "km";
  } else {
    // result = centimeter / 100 + "m";
    result = `${centimeter / 100} m`;
  }

  // console.log(result);
}

{
  // 4.1
  const initial: number = 10000000;
  let money: number | string = 0;
  let cash: string = "";

  if (initial > 10 ** 9) {
    console.log("Too much money!");
  } else if (initial / 1_000_000 >= 1) {
    money = initial / 1_000_000 + ".000.000";
    cash = "Rp." + money + ",00";
  }

  // console.log(cash);

  // 4.2
  const nominal = 1_000_000_000;
  // console.log(
  //   "Rp. " + nominal.toLocaleString("id-ID", { minimumFractionDigits: 2 })
  // );
}

{
  // 5.
  let target: string = "Hello world";
  const search: string = "ell";
  const searchIndex: number = target.search(search);
  const before: string = target.slice(0, searchIndex);
  const after: string = target.slice(searchIndex + search.length);
  const result = before + after;

  console.log(result);
}
