"use client";

import { useState } from "react";

export default function CounterUseState() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }
  function decrement() {
    setCounter(counter - 1);
  }
  function incrementBy10() {
    setCounter(counter + 10);
  }
  function decrementBy10() {
    setCounter(counter - 10);
  }
  function reset() {
    setCounter(0);
  }

  return (
    <main>
      <h1>{counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={incrementBy10}>Increment 10</button>
      <button onClick={decrementBy10}>Decrement 10</button>
      <button onClick={reset}>Reset</button>
    </main>
  );
}
