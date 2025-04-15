// Tempat semua state yang berkaitan dengan fitur counter ditulis

import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = { point: 0 };

// Fungsi yang bisa merubah nilai statenya
export const counterSlice = createSlice({
  name: "counter", // Nama state
  initialState: initialState, // Initial value state-nya
  reducers: {
    increment: (state) => {
      state.point = state.point + 1;
    },
    decrement: (state) => {
      if (state.point <= 0) {
        state.point = 0;
      } else {
        state.point = state.point - 1;
      }
    },
    reset: (state) => {
      state.point = 0;
    },
  }, // Kumpulan fungsi yang akan merubah nilai state kita
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
// const [counter, setCounter] = useState(0)
// 1. counter -> variable state
// 2. setCounter -> Satu-satunya fungsi yang bisa merubah nilai variable state
// 3. useState -> React hooks untuk membuat sebuah state
// 4. 0 -> Initial value dari variable state
