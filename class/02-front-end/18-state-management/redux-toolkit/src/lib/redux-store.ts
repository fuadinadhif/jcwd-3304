// The redux brain where all the magic happens

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counter-slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // todo: todoCounter,
  },
});
