import { createSlice } from "@reduxjs/toolkit";

const INIT_STATE = {
  section: [],
  selected: null,
};

const sectionSlice = createSlice({
  name: "section",
  initialState: INIT_STATE,
  reducers: {
    actionSection: (state, action) => {
      state.section = action.payload;
      return state;
    },
    actionSelectedSection: (state, action) => {
      state.selected = action.payload;
      return state;
    },
  },
});

export const { actionSection, actionSelectedSection } = sectionSlice.actions;

export default sectionSlice.reducer;
