const INITIAL_STATE = {
  user: {}
}

const accountReducer = (state = INITIAL_STATE, action) => {
  if (action.type === 'LOGIN_SUCCESS') {
    return {
      ...state,
      user: action.payload.user
    }
  }

  return state;
}

export default accountReducer;