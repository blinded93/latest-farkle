const initialState = {
  player1: {
    id: null,
    name: 'Player1',
    color: 'dark',
    score: 0,
    scoresPerTurn: []
  },
  player2: {
    id: null,
    name: 'Player2',
    color: 'dark',
    score: 0,
    scoresPerTurn: []
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_SCORECARDS':
      const { player1, player2 } = action.players

      return {
        player1: {
          ...state.player1, ...player1
        },
        player2: {
          ...state.player2, ...player2
        }
      }

    case 'UPDATE_SCORECARDS':
      return {
        player1: {
          ...action.scorecards[0]
        },
        player2: {
          ...action.scorecards[1]
        }
      }

    case 'UPDATE_SCORECARD':
      const { player, score } = action
      const newScoresPerTurn = [ ...state[player].scoresPerTurn, score ]

      return {
        ...state,
        [player]: {
          ...state[player],
          score: newScoresPerTurn.reduce((sum, current) => sum + current, 0),
          scoresPerTurn: newScoresPerTurn
        }
      }

    default:
      return state
  }
}