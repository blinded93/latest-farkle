import React from 'react'
import { Button } from 'react-bootstrap'

const LoadGamesBtn = props => {
  const { getGames, games } = props
  const handleClick = () => getGames(games.nextPage, localStorage.token)
  
  return (
    <>
      {
        !!games.nextPage &&
        <Button
          className='text-center'
          variant='outline-dark'
          size='sm'
          onClick={handleClick}>
            Load More Games
        </Button>
      }
    </>
  )
}

export default LoadGamesBtn