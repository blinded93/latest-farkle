const initialState = {
  id: null,
  inProgress: true,
  winner: null,
  currentPlayer: 'player1',
  lastPlayer: null,
  lastTurn: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_GAME':
      const id = action.gameData.id || state.id

      return { ...state, id }

    case 'CHANGE_CURRENT_PLAYER':
      const currentPlayer = state.currentPlayer === 'player1'
        ? 'player2'
        : 'player1'

      return { ...state, currentPlayer: currentPlayer }
      
    case 'DISPLAY_GAME':
      return action.game

    case 'LAST_TURN':
      const lastPlayer = state.currentPlayer === 'player1' ? 'player2' : 'player1'

      return { ...state, lastTurn: true, lastPlayer }
      
    case 'FINISH_GAME':
      return {
        ...state,
        winner: action.winner,
        inProgress: false
      }

    default:
      return state
  }
}