import { all } from 'redux-saga/effects'

import account from './sagas/account/saga'

export default function* rootSaga() {
  yield all([
    ...account,
  ])
}