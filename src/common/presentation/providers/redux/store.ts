import { configureStore } from "@reduxjs/toolkit";
import { modesReducer } from "./slices/modes.slice";

export const store = configureStore({
  reducer: {
    modes: modesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
