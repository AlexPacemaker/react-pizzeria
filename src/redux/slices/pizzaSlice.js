import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzasStatus",
  async (params) => {
    const { API_URL, limit, category, sortBy, order, search } = params;
    const res = await axios.get(
      `${API_URL}?${limit}${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return res.data;
  }
);

const initialState = {
  pizzaItems: [],
  status: "loading",
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.pizzaItems = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.status = "loading";
      state.pizzaItems = [];
    });

    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.pizzaItems = action.payload;
      state.status = "succes";
    });

    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = "error";
      state.pizzaItems = [];
    });
  },
});

export const selectPizzaData = (state) => state.pizzaSlice;

export const { setItems, pizzaItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
