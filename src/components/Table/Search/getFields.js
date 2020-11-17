import React from "react";
import { Field } from "redux-form";
import { InputField } from "Components/Form";

const getFields = (
  initialValues,
) => (
    <div className="body">
      <div className="row">
        <div className="col-md-6">
          <Field
            name="number"
            label="Серия рақами"
            component={InputField}
          />
        </div>
        <div className="col-md-6">
          <Field
            name="version"
            label="Апплет версияси"
            component={InputField}
          />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6">
          <Field
            name="txkmType"
            label="ТХКМ тури"
            component={InputField}
          />
        </div>
        <div className="col-md-6">
          <Field
            name="tin"
            label="СТИР"
            component={InputField}
          />
        </div>
      </div>
    </div>
  )

export default getFields
