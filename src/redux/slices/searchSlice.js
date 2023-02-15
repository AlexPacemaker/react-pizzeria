import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
});

export const selectSearch = (state) => state.searchSlice;

export const { searchValue, setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
