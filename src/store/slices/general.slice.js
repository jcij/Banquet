import { createSlice } from "@reduxjs/toolkit";

const INIT_STATE = {
  general: [],
  selected: null,
};

const generalSlice = createSlice({
  name: "general",
  initialState: INIT_STATE,
  reducers: {
    actionGeneral: (state, action) => {
      state.general = action.payload;
      return state;
    },
    actionSelectedGeneral: (state, action) => {
      state.selected = action.payload;
      return state;
    },
  },
});

export const { actionGeneral, actionSelectedGeneral } = generalSlice.actions;

export default generalSlice.reducer;
