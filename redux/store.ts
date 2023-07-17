import { configureStore } from "@reduxjs/toolkit";
import submenuSlice from "./features/categories";

export const store = configureStore({
  reducer: {
    submenu: submenuSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
