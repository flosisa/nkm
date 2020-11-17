import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Dashboard from 'Components/Dashboard'
import Registry from 'Containers/Registry'
import Statements from 'Containers/Statements'
import SendStatement from 'Containers/Statements/Send'
import ErrorPage from 'Components/Error'
import * as ROUTES from 'Constants/routes'

const Components = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.INDEX} render={() => <Redirect to={ROUTES.DASHBOARD} />} />
      <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
      <Route exact path={`${ROUTES.REGISTRY}/:submenuId`} component={Registry} />
      <Route exact path={`${ROUTES.STATEMENTS}/:submenuId`} component={Statements} />
      <Route exact path={`${ROUTES.SEND_STATEMENT}/:stage`} component={SendStatement} />
      <Route exact path={ROUTES.ERROR} component={ErrorPage} />
      <Redirect to={ROUTES.ERROR} />
    </Switch>
  )
}

export default Components
