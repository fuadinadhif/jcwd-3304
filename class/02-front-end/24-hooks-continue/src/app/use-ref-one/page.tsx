"use client";

import { useRef } from "react";

export default function UseRefOnePage() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  function makeInputBorderBlue() {
    inputRef.current.style.borderColor = "blue";
  }

  return (
    <main className="min-h-screen grid place-items-center">
      <input ref={inputRef} type="text" className="border border-red-500" />

      <div>
        <button onClick={focusInput}>Focus Input</button>
        <button onClick={makeInputBorderBlue}>Make Border Blue</button>
      </div>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
// 1. Untuk mengakses element di DOM secara langsung
