import { useDispatch, useSelector, useStore } from "react-redux";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes(); // Add Data
export const useAppSelector = useSelector.withTypes(); // Get Data
export const useAppStore = useStore.withTypes();
