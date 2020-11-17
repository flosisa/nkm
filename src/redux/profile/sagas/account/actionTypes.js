import createActionType from 'Util/redux/createActionType'
import { ACCOUNT } from '../../actionTypes';

export default ({
  [ACCOUNT]: createActionType(ACCOUNT),
})