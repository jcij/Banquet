import { createSlice } from "@reduxjs/toolkit";

const INIT_STATE = {
  portfolio: [],
  selected: null,
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState: INIT_STATE,
  reducers: {
    actionPortfolio: (state, action) => {
      state.portfolio = action.payload;
      return state;
    },
    actionSelectedPortfolio: (state, action) => {
      state.selected = action.payload;
      return state;
    },
  },
});

export const { actionPortfolio, actionSelectedPortfolio } =
  portfolioSlice.actions;

export default portfolioSlice.reducer;
