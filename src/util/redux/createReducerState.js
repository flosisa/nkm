function createReducerState(actionType, getState) {
  return {
    [`${actionType}_REQUEST`](state) {
      return {
        ...state,
        [getState]: {
          data: null,
          loading: true,
          error: null,
        },
      }
    },
    [`${actionType}_SUCCESS`](state, { payload }) {
      return {
        ...state,
        [getState]: {
          data: payload,
          loading: false,
          error: null,
        },
      }
    },
    [`${actionType}_ERROR`](state, { error }) {
      return {
        ...state,
        [getState]: {
          data: null,
          loading: false,
          error: error,
        },
      }
    },
    [`${actionType}_CLEAR`](state, { error }) {
      return {
        ...state,
        [getState]: {
          data: null,
          loading: false,
          error: null,
        },
      }
    },
  }
}

export default createReducerState