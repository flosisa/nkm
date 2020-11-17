import React, { useState, useEffect } from "react"
import Send from "Components/Statements/Send"
import sidebarMenu from "Constants/sidebarMenu"
import { pipe, prop, find, propEq, path } from "ramda"
import qs from "query-string"
import dataTable, { dummyData } from "Constants/dataTable"
import * as ROUTES from "Constants/routes"
import findItem from "Util/findItem"

const SendContainer = props => {
  const { history, location, match } = props
  const stage = +path(["params", "stage"], match)
  const defaultStage = [1]

  const [activeStage, setActiveStage] = useState(defaultStage)

  const actualStages = activeStage || stage

  return <Send actualStages={actualStages} />
}

export default SendContainer
