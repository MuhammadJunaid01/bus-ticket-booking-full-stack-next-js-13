import { configureStore } from "@reduxjs/toolkit";
import bussesSlice from "./features/buses";
import dashboardSlice from "./features/dashboard";

export const store = configureStore({
  reducer: {
    bussData: bussesSlice,
    dashboard: dashboardSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
