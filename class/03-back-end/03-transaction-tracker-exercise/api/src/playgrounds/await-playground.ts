import { writeFile, readFile } from "../utils/io.js";

console.log(readFile("src/data/transactions.json"));
console.log(await readFile("src/data/transactions.json"));
