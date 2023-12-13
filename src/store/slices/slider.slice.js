import { createSlice } from "@reduxjs/toolkit";

const INIT_STATE = {
  data: [],
  selected: null,
};

const sliderSlice = createSlice({
  name: "slider",
  initialState: INIT_STATE,
  reducers: {
    actionSlider: (state, action) => {
      state.data = action.payload;
      return state;
    },
    actionSelectedSlider: (state, action) => {
      state.selected = action.payload;
      return state;
    },
  },
});

export const { actionSlider, actionSelectedSlider } = sliderSlice.actions;

export default sliderSlice.reducer;
