import React from 'react'
import cx from 'clsx'

const InputField = props => {
  const {
    input,
    type,
    label,
    style,
    className,
    autoFocus,
    autoComplete,
    meta: { touched, error },
    errorText,
    disabled,
  } = props
  const { value } = input

  return (
    <div className={cx("form-group bgc-white flex-grow", value && 'field-w-value', className)}>
      <label>{label}</label>
      <div>
        <input
          {...input}
          type={type}
          style={style}
          invalid={error && touched}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          disabled={disabled}
          spellCheck={false}
        />
        {touched && error && <div className="form-input__required">{errorText || error}</div>}
      </div>
    </div>
  )
}

export default InputField;
