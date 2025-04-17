import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme/themeSlice";

// store variable is a global variable.
// export const store = configureStore({});

export const makeStore = () => {
  return configureStore({
    reducer: {
      isDark: themeReducer,
    },
  });
};
