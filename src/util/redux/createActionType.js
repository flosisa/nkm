const createActionType = actionType => {
  return {
    request: `${actionType}_REQUEST`,
    success: `${actionType}_SUCCESS`,
    error: `${actionType}_ERROR`,
    clear: `${actionType}_CLEAR`,
  }
}

export default createActionType