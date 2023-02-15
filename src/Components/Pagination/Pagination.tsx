import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentPage,
  selecPagination,
} from "../../redux/slices/paginationSlice";

import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

const Pagination: React.FC = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selecPagination);
  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel='...'
      nextLabel='>'
      previousLabel='<'
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={currentPage - 1}
    />
  );
};

export default Pagination;
