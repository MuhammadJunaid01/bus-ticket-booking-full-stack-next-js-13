import { configureStore } from "@reduxjs/toolkit";
import bussesSlice from "./features/buses";

export const store = configureStore({
  reducer: {
    bussData: bussesSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
