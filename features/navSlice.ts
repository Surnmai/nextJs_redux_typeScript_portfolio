// features/toggleSlice.js
import { createSlice } from "@reduxjs/toolkit";

export interface ToggleState {
  navBg: boolean;
  toggle: boolean;
  isOpen: boolean;
}

const navSlice = createSlice({
  name: "nav",
  initialState: {
    navBg: false,
    toggle: false,
    isOpen: false,
  } as ToggleState,
  reducers: {
    setNavBg: (state, action) => {
      // console.log({ action });
      state.navBg = action.payload;
    },
    toggleNav: (state) => {
      // console.log(state.toggle);

      state.toggle = !state.toggle;
    },
    closeMenuBar: (state) => {
      // console.log(state.toggle);

      state.toggle = false;
    },
    setToTop: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { setNavBg, toggleNav, closeMenuBar, setToTop } = navSlice.actions;
export default navSlice.reducer;
