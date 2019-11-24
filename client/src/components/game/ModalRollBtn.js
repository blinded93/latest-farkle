import React from 'react'
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import { completeTurnAndRoll } from '../../actions/turn'
import { modalClose } from '../../actions/modal'

const ModalRollBtn = props => {
  const { scorecards, currentPlayer, completeTurnAndRoll, modalClose, dice, game } = props
  const nextPlayer = scorecards[Object.keys(scorecards).filter(sc => sc !== currentPlayer)[0]]
  const handleClick = () => {
    modalClose()
    setTimeout(() =>{
      completeTurnAndRoll(dice, game, localStorage.token)
    }, 100)
  }

  return (
    <>
      <Button
        block
        variant='outline-success'
        onClick={handleClick}>
          {nextPlayer.name} Roll
        </Button>
    </>
  )
}

const mapStateToProps = state => ({
  game: state.currentGame,
  dice: state.turn.dice,
  currentPlayer: state.currentGame.currentPlayer,
  scorecards: state.scorecards
})

export default connect(mapStateToProps, { completeTurnAndRoll, modalClose })(ModalRollBtn)