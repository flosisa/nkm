import React, { useState, useEffect } from 'react'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { prop } from 'ramda'
import cx from 'clsx'

const SelectField = props => {
  const {
    input,
    className,
    containerClassName,
    options,
    isMulti,
    label,
    errorText,
    meta: { touched, error },
    defaultValue,
    onSelect,
    isLoading
  } = props
  const value = prop('value', input);
  const animatedComponents = makeAnimated();

  const [newValue, setNewValue] = useState(null)

  useEffect(() => {
    defaultValue && setNewValue(defaultValue)
  }, [defaultValue])

  const handleChange = selectedOption => {
    const { input: { onChange } } = props

    setNewValue(selectedOption)
    onChange(selectedOption)
    onSelect && onSelect(selectedOption)
  }

  return (
    <div className={cx(containerClassName || "form-field")}>
      <div>{label}</div>
      <div>
        <Select
          value={newValue || value}
          onChange={handleChange}
          options={options}
          isMulti={isMulti}
          placeholder=""
          components={animatedComponents}
          classNamePrefix={className}
          noOptionsMessage={() => 'Маълумот мавжуд эмас'}
          isLoading={isLoading}
          loadingMessage={() => 'Маълумот юкланмоқда'}
        />
        {touched && error && <div className="form-input__required">{errorText || error}</div>}
      </div>
    </div>
  );
}

export default SelectField;
