import { authRequest, authSuccess, authFailure } from './auth'

export const createUser = (credentials, closeModal) => {
  const newUser = credentials

  return dispatch => {
    return fetch('/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(resp => resp.json())
      .then(user => {
        Object.keys(user.errors).length === 0
          ? dispatch(authenticate({
            identifier: newUser.email,
            password: newUser.password
          }, closeModal))
          : dispatch(authFailure(user.errors))
      })
  }
}

export const authenticate = (credentials, closeModal) => {
  return dispatch => {
    dispatch(authRequest())

    return fetch('/auth_user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(resp => resp.json())
      .then(response => {
        if (response.auth_token) {
          localStorage.setItem('token', response.auth_token)
          localStorage.setItem('user', JSON.stringify(response.user))
          dispatch(authSuccess(response.user))
          !!closeModal && closeModal()
        } else {
          dispatch(authFailure(response.errors))
          localStorage.clear()
        }
      })
  }
}

export const verifyUser = token => {
  return dispatch => {
    dispatch(authRequest())

    return fetch('/verify_user', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token
      }
    })
      .then(resp => resp.json())
      .then(response => {
        if (response.errors) {
          localStorage.clear()
        } else {
          dispatch(authSuccess(response.user))
        }
      })
  }
}