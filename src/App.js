import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Index from 'Containers';
import { history } from '.';
import * as ROUTES from 'Constants/routes';

import 'Assets/style/bootstrap.min.css';
import "react-perfect-scrollbar/dist/css/styles.css";
import 'Assets/style/main.scss';

const App = () => (
  <>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path={ROUTES.INDEX} component={Index} />
      </Switch>
    </ConnectedRouter>
  </>
)

export default App;
