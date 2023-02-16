import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export enum SortPropertyEnum {
  RATING_ASC = "-rating",
  RATING_DESC = "rating",
  TITLE_ASC = "-title",
  TITLE_DESC = "title",
  PRICE_ASC = "-price",
  PRICE_DESC = "price",
}

type Sort = {
  name: string;
  sortProperty: SortPropertyEnum;
};

interface FilterSliceState {
  currentPage: number;
  categoryId: number;
  sortType: Sort;
}

const initialState: FilterSliceState = {
  currentPage: 1,
  categoryId: 0,
  sortType: {
    name: "популярности",
    sortProperty: SortPropertyEnum.RATING_ASC,
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sortType = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const selectFilter = (state: RootState) => state.filterSlice;
export const selectSort = (state: RootState) => state.filterSlice.sortType;

export const { setCategoryId, setSort, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;
