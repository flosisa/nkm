import React from "react"
import { DateField as Field } from "Components/Form"

const DateField = props => {
  const { title, input } = props

  return (
    <div className="table-search-form__field">
      <label>{title}</label>
      <Field input={input} className="date-picker-table-search" />
    </div>
  )
}

export default DateField
