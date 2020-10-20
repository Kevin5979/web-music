import React, {memo, useCallback} from 'react';
import {AppPaginationWrapper} from "./style";
import {Pagination} from "antd";

import propTypes from "prop-types";

function AppPagination(props) {
  const {
    total,
    defaultPageSize,
    defaultCurrent,
    pageSizeOptions,
    current,
    onPageChange
  } = props;

  const changePage = useCallback((index) => {
    onPageChange(index);
  }, [onPageChange]);

  return (
    <AppPaginationWrapper>
      <Pagination
        className="c-pages"
        total={total}
        defaultPageSize={defaultPageSize}
        defaultCurrent={defaultCurrent}
        hideOnSinglePage
        pageSizeOptions={pageSizeOptions}
        current={current}
        onChange={changePage}
      />
    </AppPaginationWrapper>
  )
}

AppPagination.propTypes = {
  total: propTypes.number,
  defaultPageSize: propTypes.number,
  defaultCurrent: propTypes.number,
  pageSizeOptions: propTypes.array,
  current: propTypes.number,
  onPageChange: propTypes.func
}

AppPagination.defaultProps = {
  total: 0,
  defaultPageSize: 0,
  defaultCurrent: 1,
  pageSizeOptions: [],
  current: 1
}

export default memo(AppPagination);
