import React, { useEffect } from "react"
import TableHeader from "Components/Table/Header"
import StageArrow from "Assets/svg/stage-arrow.svg"
import StageArrowNext from "Assets/svg/stage-arrow-next.svg"
import CircleSuccess from "Assets/svg/circle-success.svg"
import Circle from "Assets/svg/circle.svg"
import sendStatementStages from "Constants/sendStatementStages"
import { reduxForm, Field } from "redux-form"
import { compose } from "ramda"
import { InputField } from "Components/Form"
import { map } from "ramda"
import cx from "clsx"

const enhance = compose(
  reduxForm({
    form: "sendStatement",
    enableReinitialize: true,
  })
)

const Send = props => {
  const { actualStages, handleSubmit, initialize } = props

  useEffect(() => {
    initialize({
      subjectName: "Smart Soft MCHJ",
      mainActivityForm: "Нефт маҳсулотлари савдоси",
      region: "Тошкент",
      district: "Юнусабад",
    })
  }, [])

  return (
    <div className="send-statement">
      <TableHeader submenuTitle="Ариза жўнатиш" />
      <form onSubmit={handleSubmit}>
        <div className="control-panel">
          <div className="control">
            <div className="control-item">
              <div className="stages">
                {map(({ id, title }) => (
                  <div
                    key={id}
                    className={cx(
                      "stage",
                      actualStages.includes(id) && "passed"
                    )}
                  >
                    {id === 1 ? <StageArrow /> : <StageArrowNext />}
                    <div className={cx("content", id === 1 && "initial")}>
                      {actualStages.includes(id) ? (
                        <CircleSuccess />
                      ) : (
                        <Circle />
                      )}
                      <span>{title}</span>
                    </div>
                  </div>
                ))(sendStatementStages)}
              </div>
            </div>
          </div>
          <div className="control subject">
            <div className="row">
              <div className="tin">
                <Field name="tin" label="СТИР" component={InputField} />
                <button type="button" className="primary">
                  Совершить
                </button>
              </div>
              <Field
                name="subjectName"
                label="Субъект номи"
                component={InputField}
                disabled={true}
              />
            </div>
            <div className="row mt-5">
              <div className="col-md-4">
                <Field
                  name="mainActivityForm"
                  label="Асосий фаолият тури"
                  component={InputField}
                />
              </div>
              <div className="col-md-8 flex">
                <Field
                  name="region"
                  label="Вилоят"
                  component={InputField}
                  className="region"
                />
                <Field name="district" label="Туман" component={InputField} />
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-5" style={{ margin: 0 }}>
                <div className="add-activities-btn">
                  <div className="icon">
                    <img src="/assets/svg/circle-add-gray.svg" alt="add-gray" />
                    <span>Добавьте адрес на карте</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="activities-item">
                  <div>
                    <span>Юнусабадский район, улица Таракиет, дом 15 А</span>
                    <div className="icon">
                      <img src="/assets/svg/X-wafer.svg" alt="close-wafer" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="control-panel firm">
          <div className="control subject">
            <div className="row mt-3">
              <div className="col-md-4">
                <Field
                  name="type"
                  label="Шаҳобчани танланг"
                  component={InputField}
                />
              </div>
              <div className="col-md-8">
                <Field
                  name="name"
                  label="Савдо шаҳобчаси номи"
                  component={InputField}
                />
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-6">
                <Field
                  name="activityForm"
                  label="Фаолият тури"
                  component={InputField}
                />
              </div>
              <div className="col-md-6">
                <Field
                  name="activityType"
                  label="Фаолият тоифаси"
                  component={InputField}
                />
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-6">
                <Field
                  name="address"
                  label="Шаҳобча манзили"
                  component={InputField}
                />
              </div>
              <div className="col-md-6">
                <Field
                  name="phoneNumber"
                  label="Телефон рақами"
                  component={InputField}
                />
              </div>
            </div>
            <button type="submit" className="primary submit-btn">
              Дальше
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default enhance(Send)
