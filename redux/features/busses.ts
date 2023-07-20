import { BussesTypes } from "@/libs/types";
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
    getAllBussData: (
      state,
      action: PayloadAction<BussesTypes[] | undefined>
    ) => {
      if (action.payload === undefined) {
        return;
      }
      state.data = action.payload;
    },
  },
});
export const { getAllBussData } = bussesSlice.actions;
export default bussesSlice.reducer;
