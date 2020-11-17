import React from 'react'
import Add from 'Assets/svg/circle-add-gray.svg'
import Excel from 'Assets/svg/excel.svg'
import { Link } from 'react-router-dom'

const Header = props => {
  const { submenuTitle, operationTitle, onOperationClick } = props

  return (
    <div className="breadcrumb-title">
      <span>{submenuTitle}</span>
      {operationTitle && (
        <div className="control-panel">
          <div className="control">
            <div className="control-item">
              <div className="table-header">
                <div className="operation" onClick={onOperationClick}>
                  <Add className="add-icon" />
                  <span>{operationTitle}</span>
                </div>
                <span className="separator" />
                <div className="operation">
                  <Excel />
                  <span>Сохранить себе</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
