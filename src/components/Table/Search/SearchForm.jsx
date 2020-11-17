import React from "react"
import { reduxForm } from "redux-form"
import { compose } from "ramda"
import getFields from './getFields'

const enhance = compose(
  reduxForm({
    form: "tableSearchForm",
    enableReinitialize: true
  })
)

const SearchForm = props => {
  const {
    handleSubmit,
    initialValues,
  } = props

  const searchFormFields = getFields(
    initialValues,
  )

  return (
    <form onSubmit={handleSubmit}>
      <div className="modal-wrapper">
        <div className="content-wrapper">
          <div>{searchFormFields}</div>
          <div className="footer">
            <button type="submit" className="primary">Совершить</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default enhance(SearchForm)
