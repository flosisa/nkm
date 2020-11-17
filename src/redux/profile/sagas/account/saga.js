import { takeLatest, put, call, fork } from "redux-saga/effects";
import { account } from "Api/profile";
import actionTypes from "./actionTypes";
import { prop } from 'ramda'

function* accountWatcher() {
  yield takeLatest(actionTypes.ACCOUNT.request, function* ({ payload }) {
    try {
      const { data } = yield call(account, payload);

      yield put({
        type: actionTypes.ACCOUNT.success,
        payload: prop('data', data)
      });
    } catch (error) {
      yield put({
        type: actionTypes.ACCOUNT.error,
        error
      });
    }
  });
}

export default [
  fork(accountWatcher)
]