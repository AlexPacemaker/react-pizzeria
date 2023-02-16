import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface PaginationSliceState {
  currentPage: number;
}

const initialState: PaginationSliceState = {
  currentPage: 1,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const selecPagination = (state: RootState) =>
  state.paginationSlice.currentPage;

export const { currentPage, setCurrentPage } = paginationSlice.actions;

export default paginationSlice.reducer;
