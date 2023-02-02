import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/slices/paginationSlice";

import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.paginationSlice.currentPage);
  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
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
