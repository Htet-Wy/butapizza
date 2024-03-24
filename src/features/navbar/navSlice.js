import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenNav: false,
};

const navSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    openNav: (state, action) => {
      state.isOpenNav = true;
    },
    closeNav: (state, action) => {
      state.isOpenNav = false;
    },
  },
});

export const { openNav, closeNav } = navSlice.actions;
export default navSlice.reducer;
