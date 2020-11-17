const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = '* Обязательное поле!'
  }

  return errors;
}

export default validate;
