import { configureStore } from "@reduxjs/toolkit";
import { modesReducer } from "./slices/modes/modes.slice";
import { authReducer } from "./slices/auth/auth.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    modes: modesReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
