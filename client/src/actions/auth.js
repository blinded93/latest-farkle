export const authRequest = () => {
  return {
    type: 'AUTH_REQUEST'
  }
}

export const authSuccess = user => {
  return {
    type: 'AUTH_SUCCESS',
    user: user
  }
}

export const authFailure = errors => {
  return {
    type: 'AUTH_FAILURE',
    errors: errors
  }
}

export const logout = () => {
  return dispatch => {
    localStorage.clear()
    return dispatch({
      type: 'LOGOUT'
    })
  }
}