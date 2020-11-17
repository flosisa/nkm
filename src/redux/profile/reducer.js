import createReducer from 'Util/redux/createReducer'
import createReducerState from 'Util/redux/createReducerState'
import {
  ACCOUNT,
} from './actionTypes';
import * as STATES from './states';

const reducer = {
  ...createReducerState(ACCOUNT, STATES.ACCOUNT),
}

export default createReducer({}, reducer)