import React, { useEffect } from "react";
import { prop, has, isEmpty, addIndex, map } from "ramda";
import tableHandler from "Util/tableHandler";
import cx from 'clsx'

const Table = props => {
  const { data, columns, style, onRowClick } = props;
  const defMinWidth = '100px';
  const tableContainer = 'table-inner-container'
  const mapIndexed = addIndex(map)

  const { filteredData } = tableHandler(data, columns);

  useEffect(() => {
    const container = document.getElementById(tableContainer);
    container.style.width = `${container.offsetWidth}px`
    container.style.position = 'relative'
  }, [columns])

  return (
    <div style={style} id={tableContainer} className={tableContainer}>
      <div className="table-data-header table-card-body">
        {mapIndexed(({ header, minWidth, width, hide }, index) => (
          <div key={index} style={{ width, minWidth: minWidth || defMinWidth, display: hide ? 'none' : 'block' }}>
            <div className="table-header-content table-margin">{header}</div>
          </div>
        ))(columns)}
      </div>

      {!isEmpty(data) ? mapIndexed((item, index) => (
        <div
          key={index}
          onClick={() => onRowClick(item)}
          className="table-data-row table-card-body"
          style={{ [filteredData.length - 1 === index && "marginBottom"]: 0 }}
        >
          {mapIndexed(({ field, minWidth, width, hide, type }, index) => (
            has(field, item) && (
              <div
                key={index}
                style={{ width, minWidth: minWidth || defMinWidth, display: hide ? 'none' : 'block' }}
              >
                <div className="table-data-content-container">
                  <div className="table-data-content table-margin">
                    <span
                    >
                      {prop(field, item)}
                    </span>
                  </div>
                  {index !== columns.length - 1 && <div className="vertical-separator" style={{ display: hide ? 'none' : 'block' }} />}
                </div>
              </div>
            )
          ))(columns)}
        </div>
      ))(filteredData) : (
          <div className="table-no-data">
            Сўров бўйича маълумот топилмади
          </div>
        )}
    </div>
  );
};

export default Table
