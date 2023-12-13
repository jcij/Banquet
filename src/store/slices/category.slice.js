import { createSlice } from "@reduxjs/toolkit";

const INIT_STATE = {
  category: [],
  selected: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState: INIT_STATE,
  reducers: {
    actionCategory: (state, action) => {
      state.category = action.payload;
      return state;
    },
    actionSelectedCategory: (state, action) => {
      state.selected = action.payload;
      return state;
    },
  },
});

export const { actionCategory, actionSelectedCategory } = categorySlice.actions;

export default categorySlice.reducer;
