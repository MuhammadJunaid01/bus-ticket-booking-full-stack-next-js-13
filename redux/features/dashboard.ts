import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface DashBoardSate {
  open: boolean;
  isHover: boolean;
}
const initialState: DashBoardSate = {
  open: false,
  isHover: false,
};
export const dashboardSlice = createSlice({
  name: "dashboardSlice",
  initialState,
  reducers: {
    openDahboardDrawer: (state) => {
      state.open = !state.open;
    },
    useCustomHover: (state) => {
      console.log("called");
      state.isHover = !state.isHover;
    },
  },
});
export const { openDahboardDrawer, useCustomHover } = dashboardSlice.actions;
export default dashboardSlice.reducer;
