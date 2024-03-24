import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "../features/navbar/navSlice";
import menuReducer from "../features/menu/menuSlice";
import modalReducer from "../features/modal/modalSlice";
import scrollReducer from "../features/scroll/scrollSlice";

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    menu: menuReducer,
    modal: modalReducer,
    scroll: scrollReducer,
  },
});
