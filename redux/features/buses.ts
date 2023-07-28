import { BusesTypes } from "@/lib/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export interface Busses {
  data: BusesTypes[];
}
const initialState: Busses = {
  data: [],
};
export const bussesSlice = createSlice({
  name: "bussesSlice",
  initialState,
  reducers: {
    getAllBussData: (state, action: PayloadAction<BusesTypes[]>) => {
      state.data = action.payload;
    },
  },
});
export const { getAllBussData } = bussesSlice.actions;
export default bussesSlice.reducer;
