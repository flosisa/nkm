import React, { useState, useEffect, useRef } from "react";
import cx from "clsx";
import SearchForm from "./SearchForm.jsx";
//import { getUserSearch } from 'Util/storages'
import { isEmpty } from 'ramda'

const Search = props => {
  const {
    onSubmit,
    search,
    setSearch,
  } = props

  const dropdownControlRef = useRef(null);
  const dropdownMenuRef = useRef(null);

  const mouseDownHandler = e => {
    const outOfControl = dropdownControlRef && !dropdownControlRef.current.contains(e.target);
    const outOfMenu = dropdownMenuRef && !dropdownMenuRef.current.contains(e.target);

    if (outOfControl && outOfMenu) {
      setSearch(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", mouseDownHandler);

    return () => document.removeEventListener("mousedown", mouseDownHandler);
  }, []);

  const toggleDropdown = () => setSearch(!search);

  return (
    <div ref={dropdownControlRef} className="form-group">
      <div className="frame table-search">
        <label>Поиск</label>
        <input onClick={toggleDropdown} className="input-disable" />
        <div
          ref={dropdownMenuRef}
          id="activities-modal"
          className={cx(
            'table-search-form activities-modal iziModal',
            search && "table-search-form-open"
          )}
        >
          <SearchForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Search;
