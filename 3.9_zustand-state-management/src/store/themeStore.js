import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useThemeStore = create(
  devtools((set) => ({
    isDark: true,
    toggleTheme: (value) => set({ isDark: value }),
  }))
);

export default useThemeStore;
