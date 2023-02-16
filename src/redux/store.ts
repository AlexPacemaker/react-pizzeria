import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import paginationSlice from "./slices/paginationSlice";
import searchSlice from "./slices/searchSlice";
import cartSlice from "./slices/cartSlice";
import pizzaSlice from "./slices/pizzaSlice";

export const store = configureStore({
  reducer: {
    filterSlice,
    cartSlice,
    pizzaSlice,
    paginationSlice,
    searchSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
