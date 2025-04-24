"use client";

import { useReducer } from "react";
import { counterReducer } from "@/reducers/counter-reducer";

export default function CounterUseReducer() {
  const [state, dispatch] = useReducer(counterReducer, 0);

  return (
    <main>
      <h1>{state}</h1>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("increment_by_10")}>Increment 10</button>
      <button onClick={() => dispatch("decrement_by_10")}>Decrement 10</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </main>
  );
}
