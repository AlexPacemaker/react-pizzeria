import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

type PizzaItem = {
  id: string;
  imgUrl: string;
  title: string;
  price: number;
  sizes: number[];
  types: number[];
};

enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

interface PizzaSliceState {
  pizzaItems: PizzaItem[];
  status: Status;
}

export const fetchPizzas = createAsyncThunk<
  PizzaItem[],
  Record<string, string>
>("pizza/fetchPizzasStatus", async (params) => {
  const { API_URL, limit, category, sortBy, order, search } = params;
  const { data } = await axios.get<PizzaItem[]>(
    `${API_URL}?${limit}${category}&sortBy=${sortBy}&order=${order}${search}`
  );
  return data;
});

const initialState: PizzaSliceState = {
  pizzaItems: [],
  status: Status.LOADING,
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<PizzaItem[]>) => {
      state.pizzaItems = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.status = Status.LOADING;
      state.pizzaItems = [];
    });

    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.pizzaItems = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = Status.ERROR;
      state.pizzaItems = [];
    });
  },
});

export const selectPizzaData = (state: RootState) => state.pizzaSlice;

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
