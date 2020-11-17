import React from "react"
import { SelectField as Field } from "Components/Form"

const SelectField = props => {
  const { title, ...rest } = props

  return (
    <Field
      {...{
        ...rest,
        label: title,
        className: "react-select__table-search",
        containerClassName: "react-select__field table-search-form__field",
      }}
    />
  )
}

export default SelectField
