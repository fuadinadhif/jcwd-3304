// 1. = | == | ===
// 1.1 = -> Membuat/mengisi nilai ke dalam sebuah variable
const a = 10;
let b = 100;
b = 50;

// 1.2 == -> Loose/double equal comparison. Dia akan menyamakan tipe data kedua value sebelum membandingkannya
console.log("1" == 1);
console.log(Number("1"));
// Ubah string "1" menjadi number
// Baru bandingkan kedua value-nya
// 1 == 1 -> true
console.log({} == 1);
console.log(Number({}));
// Ubah object {} menjadi number
// Baru bandingkan kedua value-nya
// NaN == 1 -> false

// 1.3 === -> Strict/triple equal. Dia TIDAK AKAN menyamakan tipe data kedua value-nya
console.log("1" === 1);
// Langsung bandingkan value sebelah kiri dengan value sebelah kanan
// "1" === 1 -> false
