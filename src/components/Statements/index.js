import React from 'react'
import Table from 'Components/Table'
import TableSearch from 'Components/Table/Search'
import TableHeader from 'Components/Table/Header'
import Pagination from "Components/Pagination";
import PerfectScrollbar from "react-perfect-scrollbar";

const Statements = props => {
  const {
    submenuTitle,
    data,
    columns,
    setScrollBarRef,
    activePage,
    pageCount,
    onPageChange,
    onTableSearch,
    search,
    setSearch,
    onOperationClick
  } = props

  return (
    <div className="my-container">
      <div className="row">
        <div className="col-md-12">
          <TableHeader
            submenuTitle={submenuTitle}
            onOperationClick={onOperationClick}
            operationTitle="Отправить"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <TableSearch
            onSubmit={onTableSearch}
            search={search}
            setSearch={setSearch}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 table-container">
          <PerfectScrollbar
            containerRef={ref => setScrollBarRef(ref)}
            options={{ suppressScrollY: true, useBothWheelAxes: true }}
          >
            <Table
              data={data}
              columns={columns}
            />
          </PerfectScrollbar>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="table-footer">
            <div className="counts">
              <span>Всего: </span>
              <span>3000 документов</span>
            </div>
            <div className="counts flex-grow">
              <span>На странице: </span>
              <span>10 документов</span>
            </div>
            <div className="table-pagination__container">
              <Pagination
                page={activePage}
                pageCount={pageCount}
                onChange={onPageChange}
                className="table-pagination"
              />
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Statements
