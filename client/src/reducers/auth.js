const initialState = {
  isAuthenticated: false,
  isAuthenticating: false,
  currentUser: {},
  errors: []
}

export default (state = initialState, action) => {
  switch (action.type) {

    case 'AUTH_REQUEST':
      return {
        ...state,
        isAuthenticating: true
      }

    case 'AUTH_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        isAuthenticating: false,
        currentUser: action.user
      }
    
    case 'AUTH_FAILURE':
      return {
        ...initialState,
        errors: action.errors || []
      }

    case 'LOGOUT':
      return initialState

    default:
      return state
  }
}