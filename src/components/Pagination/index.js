import React from "react";
import ReactPagination from "react-paginate";
import NextIcon from "Assets/svg/next.svg";

export default ({ page, pageCount, onChange, className }) => (
  <ReactPagination
    forcePage={page}
    pageCount={pageCount}
    onPageChange={({ selected }) => onChange(parseInt(selected) + 1)}
    previousLabel={<NextIcon className={`${className}__nav-btn--prev`} />}
    nextLabel={<NextIcon className={`${className}__nav-btn--next`} />}
    containerClassName={className}
    pageClassName={`${className}__page`}
    activeClassName={`${className}__page--active`}
    breakClassName={`${className}__break`}
    previousClassName={`${className}__nav-btn`}
    nextClassName={`${className}__nav-btn`}
  />
);
