import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import searchSlice from "./slices/searchSlice";
import cartSlice from "./slices/cartSlice";
import pizzaSlice from "./slices/pizzaSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    filterSlice,
    cartSlice,
    pizzaSlice,
    searchSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
