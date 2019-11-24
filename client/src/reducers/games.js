const initialState = {
  areLoaded: false,
  error: '',
  page: 0,
  nextPage: 2,
  list: []
}
export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_GAMES':
      return {
        ...state,
        areLoaded: true,
        page: action.pagy.page,
        nextPage: action.pagy.next,
        list: [ ...state.list, ...action.games ]
      }

    case 'DELETE_GAME':
      return {
        ...state,
        list: state.list.filter(game => action.gameId !== game.id)
      }
    
    case 'ADD_GAME':
      return {
        ...state,
        list: [ ...state.list, action.game ]
      }

    case 'LOAD_ERROR':
      return {
        ...state,
        areLoaded: false,
        error: action.error
      }

    default:
      return state
  }
}