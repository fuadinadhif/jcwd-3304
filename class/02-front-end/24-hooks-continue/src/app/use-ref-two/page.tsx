"use client";

import { useRef, useState } from "react";

export default function UseRefTwo() {
  console.log("Component re-rendered!");

  const [stateCount, setStateCount] = useState(0);

  const refCount = useRef(0);
  function setRef() {
    refCount.current += 1;
    console.log(refCount.current);
  }

  return (
    <main>
      <div>
        <p>State: {stateCount}</p>
        <button onClick={() => setStateCount(stateCount + 1)}>
          Update State Count
        </button>
      </div>
      <div>
        <p>Ref: {refCount.current}</p>
        <button onClick={setRef}>Update Ref Count</button>
      </div>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
// 2. Ketika ingin mengupdate value tanpa melakukan re-render
