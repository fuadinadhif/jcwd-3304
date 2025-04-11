"use client";

// import useState untuk membuat state
import { useState } from "react";

export default function UseStatePage() {
  // let counter = 0;

  // Cara panjang
  // const state = useState(0);
  // const counter = state[0];
  // const setCounter = state[1];

  // Cara singkat
  const [counter, setCounter] = useState(0);

  return (
    <main>
      <h1>Use State Hooks</h1>
      <button
        onClick={() => {
          // counter = counter + 1;
          // counter++;
          // console.log(counter);
          setCounter(() => counter + 1);
        }}
        className="border"
      >
        Increment
      </button>
      <p>{counter}</p>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
// State itu adalah variabel special di dalam React
// Dia spesial karena hanya ketika nilai state berubah, maka tampilan di dalam component akan berubah

// function useState() {
//   return [value, () => {}];
// }

// const funcExp = () => {}
// function funcExp() {}
// const setCounter = () => {}

const array = [1, 2];
// const one = array[0]
// const two = array[1]
const [one, two] = array;
