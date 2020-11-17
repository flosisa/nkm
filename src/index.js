// React
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { setToken } from 'Util/storages'

// Redux with React
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import reducers from 'Redux/reducers';
import rootSaga from 'Redux/sagas';

export const history = createBrowserHistory();
const routeMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, routeMiddleware];

const composeEnhancers = process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers(history), composeEnhancers(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga);

// setToken
// const route = history.location.pathname
// if (route.startsWith('/token')) {
//   setToken(route.split('/token/')[1])
// }

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-container')
);