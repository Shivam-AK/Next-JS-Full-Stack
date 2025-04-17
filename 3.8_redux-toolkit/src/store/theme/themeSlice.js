import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
};

export const themeSlice = createSlice({
  name: "isDark",
  initialState,
  reducers: {
    toggleTheme: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
