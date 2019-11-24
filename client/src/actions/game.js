import { createScorecards, updateScorecard } from './scorecards'
import { addGame } from './games'
import { modalShow } from './modal'

export const createGame = (players, token) => {
  return dispatch => {
    if (!!token) {
      return fetch('/games', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': token
        },
        body: JSON.stringify(players)
      })
        .then(resp => resp.json())
        .then(game => {
          const { scorecards, ...gameData } = game
          
          dispatch(newGame(gameData))
          dispatch(addGame(game))
          dispatch(createScorecards(players))
        })
    } else {
      dispatch(newGame({ id: '00000' }))
      dispatch(createScorecards(players))
    }
  }
}

const newGame = gameData => ({ type: 'NEW_GAME', gameData})

export const changeCurrentPlayer = (game, token) => {
  const current_player = game.currentPlayer === 'player1'
    ? 'player2'
    : 'player1'
  const last_turn = !!game.lastTurn ? true : false
  const gameData = { current_player, last_turn }
  if (!!game.lastTurn) gameData.last_player = current_player
  const callback = { type: 'CHANGE_CURRENT_PLAYER' }

  return dispatch => {
    dispatch(updateGame(game, gameData, token, callback))
  }
}

const updateGame = (game, gameInfo, token, callback) => {
  return dispatch => {
    if (!!token && game.id) {
      return fetch(`/games/${game.id}`, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': token
        },
        body: JSON.stringify(gameInfo)
      })
        .then(resp => resp.json())
        .then(game => {
          dispatch(callback)
        })
    } else {
      dispatch(callback)
    }
  }
}

export const displayGame = game => ({ type: 'DISPLAY_GAME', game })

export const changeToLastTurn = () => ({ type: 'LAST_TURN' })

export const finishGame = (gameData, token, scorecard) => {
  const { game, ...gameInfo } = gameData
  const callback = { type: 'FINISH_GAME', winner: gameInfo.winner }

  return dispatch => {
    dispatch(updateGame(game, gameInfo, token, callback))

    if (scorecard) {
      const message = ` scored ${scorecard.score} points and wins!`
      const isDone = true

      dispatch(updateScorecard(scorecard, token, isDone))
      dispatch(modalShow('TurnChangeModal', message))
    }
  }
 }