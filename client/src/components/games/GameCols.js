import React, { Fragment } from 'react'

const GameCols = props => {
  const { game } = props
  const handleWinner = (name, winner) => {
    return name === winner ? 'bg-danger text-light' : ''
  }

  return (
    <>
      <td>{game.id}</td>
      {
        game.scorecards.map(card => (
            <Fragment key={`card-${card.id}`}>
              <td
                className={handleWinner(card.name, game.winner)}>
                  {card.name}
              </td>
              <td>{card.score}</td>
            </Fragment>
          )
        )
      }
    </>
  )
}

export default GameCols