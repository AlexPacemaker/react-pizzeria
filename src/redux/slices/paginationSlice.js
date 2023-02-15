import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const selecPagination = (state) => state.paginationSlice;

export const { currentPage, setCurrentPage } = paginationSlice.actions;

export default paginationSlice.reducer;
