import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getCartFromLocalStorage } from "../../utils/getCartFromLocalStorage";
import { calcTotalPrice } from "../../utils/calcTotalPrice";

export type TCartItem = {
  id: string;
  title: string;
  price: number;
  imgUrl: string;
  type: string;
  size: number;
  count: number;
};

interface CartSliceState {
  totalPrice: number;
  items: TCartItem[];
}

const { items, totalPrice } = getCartFromLocalStorage();

const initialState: CartSliceState = {
  totalPrice,
  items,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<TCartItem>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem && findItem.count > 0) {
        findItem.count--;
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.items);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

//создание селектора, чтобы использовать где и когда надо в программе
export const selectCart = (state: RootState) => state.cartSlice;
export const selectCartItemById = (id: string) => (state: RootState) =>
  state.cartSlice.items.find((obj) => obj.id === id);

export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
