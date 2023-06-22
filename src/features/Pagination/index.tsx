import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';
import {useAppDispatch} from "app/store";
import {onChangePage} from "entities/CatalogList";

type PaginationProps = {
  currentPage: number;
};

export const Pagination: React.FC<PaginationProps> = ({ currentPage, }) => {
  const dispatch = useAppDispatch();
  return (
      <ReactPaginate
          className={styles.root}
          breakLabel="..."
          nextLabel=">"
          previousLabel="<"
          onPageChange={(event) => onChangePage(event.selected + 1, dispatch)}
          pageRangeDisplayed={4}
          pageCount={3}
          forcePage={currentPage - 1}
      />
  )
};
