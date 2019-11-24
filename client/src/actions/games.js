export const getGames = (page, token) => {
  return dispatch => {
    return fetch(`/games?page=${page}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token
      }
    })
      .then(resp => {
        const json = resp.json()

        return resp.ok
          ? json
          : Promise.reject(`${resp.statusText}, you must be logged in to do that.`)
      })
      .then(({ games, pagy }) => dispatch(loadGames(games, pagy)))
      .catch(error => dispatch(loadErrors(error)))
  }
}

const loadGames = (games, pagy) => ({ type: 'LOAD_GAMES', games, pagy })

const loadErrors = error => ({ type: 'LOAD_ERROR', error })

export const addGame = game => ({ type: 'ADD_GAME', game })

export const deleteGame = (gameId, token) => {
  return dispatch => {
    return fetch(`/games/${gameId}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token
      }
    })
      .then(resp => {
        const json = resp.json()
        
        return resp.ok ? json: Promise.reject(resp.statusText)
      })
      .then(game => dispatch({ type: 'DELETE_GAME', gameId: game.id }))
      .catch(error => dispatch(loadErrors(error)))
  }
}