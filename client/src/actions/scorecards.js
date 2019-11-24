import { authFailure } from './auth'
import { modalShow } from './modal'

export const createScorecards = players => ({
  type: 'CREATE_SCORECARDS',
  players
})

export const updateScorecards = scorecards => ({
  type: 'UPDATE_SCORECARDS',
  scorecards
})

export const updateScorecard = (scorecard, token, isDone) => {
  const { id, player, score } = scorecard

  return dispatch => {
    if (!!token && id) {
      return fetch(`/scorecards/${id}`, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': token
        },
        body: JSON.stringify({ score, player })
      })
        .then(resp => resp.json())
        .then(s => dispatch(completeTurnAndBank(score, player,isDone)))
        .catch(error => dispatch(authFailure(error)))
    } else {
      dispatch(completeTurnAndBank(score, player,isDone))
    }
  }
}

const completeTurnAndBank = (score, player, isDone) => {
  const message = ` scored ${score} points!`

  return dispatch => {
    if (!isDone) dispatch(modalShow('TurnChangeModal', message))
    dispatch({ type: 'UPDATE_SCORECARD', score: score , player: player })
    dispatch({ type: 'RESET_ALL' })
  }
}