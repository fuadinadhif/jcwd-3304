"use client";

import React, { useState, useMemo, useCallback } from "react";

function multiplyTwoValues(a: number, b: number): number {
  console.log("Function running!");
  return a * b;
}

export default function UseMemoUseCallbackPage() {
  console.log("Parent rendered!");

  const [counter, setCounter] = useState(0);

  const valueOne = 10;
  const valueTwo = 20;
  const valueAll = useMemo(() => {
    return multiplyTwoValues(valueOne, valueTwo);
  }, [valueOne, valueTwo]);
  // const valueAll = multiplyTwoValues(valueOne, valueTwo);

  const showGreetings = useCallback(() => {
    return function showGreetings() {
      alert("Hello all!");
    };
  }, []);
  // function showGreetings() {
  //   alert("Hello all!");
  // }

  return (
    <main className="min-h-screen grid place-items-center">
      <div>
        <p>Value All: {valueAll}</p>
        <p>Counter: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>
          Increment Counter
        </button>
      </div>
      <Children showGreetings={showGreetings} />
    </main>
  );
}

const Children = React.memo(function Children({ showGreetings }) {
  console.log("Children rendered!");

  return (
    <div>
      <p>Children Here!</p>
      <button onClick={showGreetings}>Greetings</button>
    </div>
  );
});

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
// useCallback -> Mengingat definisi sebuah fungsi. Fungsi tidak akan dibuat lagi kalau tidak ada perubahan di array dependency
// useMemo -> Hooks yang akan mengingat hasil eksekusi sebuah fungsi. Fungsi tersebut tidak akan dijalankan ulang kecuali ada array dependency yang berubah
// React.memo -> API React yang akan memastikan children komponen tidak akan ikut dirender bersama dengan parent komponen

// useCallback -> Mengingat pembuatan/BENTUK sebuah fungsi
// useMemo -> Mengingat HASIL eksekusi sebuah fungsi
