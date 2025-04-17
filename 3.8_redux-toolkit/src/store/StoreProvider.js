"use client";

import { Provider } from "react-redux";
import { makeStore } from "./store";
import { useRef } from "react";
import { toggleTheme } from "./theme/themeSlice";

export default function StoreProvider({ children }) {
  const storeRef = useRef(undefined);
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();

    // Add initial State
    // storeRef.current.dispatch(toggleTheme(false));
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
}
