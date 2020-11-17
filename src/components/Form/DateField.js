import React from "react";
import ReactDatePicker from "react-date-picker";
import CalendarIcon from "Assets/svg/calendar.svg";
import { prop } from 'ramda'
import cx from 'clsx'

const DateField = props => {
  const {
    input,
    className,
    errorText,
    meta,
    label
  } = props
  const { touched, error } = meta || ''

  return (
    <div className="form-field">
      <div>{label}</div>
      <div>
        <ReactDatePicker
          value={prop('value', input)}
          onChange={prop('onChange', input)}
          className={cx('date-picker', `${className}`, error && touched && 'date-picker__invalid')}
          format="dd.MM.yyyy"
          calendarIcon={<CalendarIcon />}
        />
        {touched && error && <div className="form-input__required">{errorText || error}</div>}
      </div>
    </div>
  )
};

export default DateField
