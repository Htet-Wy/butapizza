import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  scrollToSectionId: null,
};

const scrollSlice = createSlice({
  name: "scroll",
  initialState,
  reducers: {
    scrollToSection: (state, action) => {
      state.scrollToSectionId = action.payload;
    },
  },
});

export const { scrollToSection } = scrollSlice.actions;
export default scrollSlice.reducer;
