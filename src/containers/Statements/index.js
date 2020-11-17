import React, { useState, useEffect } from "react";
import Statements from 'Components/Statements'
import sidebarMenu from 'Constants/sidebarMenu'
import { pipe, prop, find, propEq, path } from 'ramda'
import qs from "query-string";
import dataTable, { dummyData } from 'Constants/dataTable'
import * as ROUTES from 'Constants/routes'
import findItem from 'Util/findItem'

const StatementsContainer = props => {
  const { history, location, match } = props
  const menu = location.pathname.split('/').splice(0, 2).join('/')
  const submenuId = +path(['params', 'submenuId'], match)
  const query = qs.parse(location.search);
  const { page, sendStage } = query
  const data = Array(10).fill(undefined).map(() => dummyData)
  const columns = dataTable[0].columns
  //const columns = findItem('id', submenuId, 'columns', dataTable)
  const submenuTitle = pipe(
    find(propEq('menu', menu)),
    item => {
      const submenus = prop('submenus', item)

      return submenus ? pipe(
        find(propEq('id', submenuId)),
        prop('title')
      )(submenus) :
        prop('title', item)
    }
  )(sidebarMenu)
  const defaultSize = 10
  const activePage = parseInt(page || 1) - 1;
  const pageCount = Math.ceil(100 / defaultSize);
  const defaultSendStage = 1

  const [scrollBarRef, setScrollBarRef] = useState(null)
  const [search, setSearch] = useState(false)

  useEffect(() => {
    if (scrollBarRef) scrollBarRef.scrollLeft = -1
  }, [scrollBarRef])

  const onPageChange = (selected, pageSize) => {
    history.push({
      search: qs.stringify({
        page: pageSize ? 1 : selected,
        size: pageSize || size
      })
    });
  };

  const onOperationClick = () => {
    history.push(`${ROUTES.SEND_STATEMENT}/${defaultSendStage}`)
  }

  const onTableSearch = formValues => {
    setSearch(false);
  }

  return (
    <Statements
      submenuTitle={submenuTitle}
      columns={columns}
      data={data}
      scrollBarRef={scrollBarRef}
      setScrollBarRef={setScrollBarRef}
      activePage={activePage}
      pageCount={pageCount}
      onPageChange={onPageChange}
      search={search}
      setSearch={setSearch}
      onTableSearch={onTableSearch}
      onOperationClick={onOperationClick}
    />
  );
}

export default StatementsContainer
