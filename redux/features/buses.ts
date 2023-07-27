import { BussesTypes } from "@/lib/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export interface Busses {
  data: BussesTypes[];
}
const initialState: Busses = {
  data: [],
};
export const bussesSlice = createSlice({
  name: "bussesSlice",
  initialState,
  reducers: {
    getAllBussData: (state, action: PayloadAction<BussesTypes[]>) => {
      state.data = action.payload;
    },
  },
});
export const { getAllBussData } = bussesSlice.actions;
export default bussesSlice.reducer;
