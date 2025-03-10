let president: string = "Jokowi";

/* --------------------------------- If Else -------------------------------- */
if (president === "Prabowo") {
  console.log("Benar");
} else {
  console.log("Salah");
}

// [Condition] ? [True Condition] : [False Condition]
const result = president === "Prabowo" ? "Benar" : "Salah";
console.log(result);

/* ----------------------------- If ElseIf Else ----------------------------- */
if (president === "Prabowo") {
  console.log("Benar");
} else if (president === "Jokowi") {
  console.log("Bisa jadi");
} else {
  console.log("Salah");
}

const result1 =
  president === "Prabowo"
    ? "Benar"
    : president === "Jokowi"
    ? "Bisa jadi"
    : "Salah";
console.log(result1);
