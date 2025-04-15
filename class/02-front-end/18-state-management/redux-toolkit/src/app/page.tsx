"use client";

// 1. useDispatch -> Redux hook untuk mengirim actions ke reducer
// 2. useSelector -> Redux hook untuk mengambil nilai state
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
} from "@/lib/features/counter/counter-slice";

export default function HomePage() {
  const count = useSelector((state) => {
    return state.counter.point;
  });
  // const todo = useSelector((state) => {
  //   return state.todo
  // })
  const dispatch = useDispatch();

  return (
    <main>
      <h1>Redux Counter</h1>
      <p>{count}</p>
      <button
        className="border border-white p-2"
        onClick={() => dispatch(increment())}
      >
        Increment +
      </button>
      <button
        className="border border-white p-2"
        onClick={() => dispatch(decrement())}
      >
        Decrement -
      </button>
      <button
        className="border border-white p-2"
        onClick={() => dispatch(reset())}
      >
        Reset
      </button>
    </main>
  );
}
