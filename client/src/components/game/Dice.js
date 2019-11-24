import React from 'react'
import { connect } from 'react-redux'
import { selectDice, deselectDice } from '../../actions/turn'

const Dice = props => {
  const { id, num, selectDice, savedDice,
          deselectDice, diceState,
          rollCount, color, inProgress } = props
          
  const diceIndex = Number(id.split('-')[1])

  const selectFunc = () => {
    const index = parseInt(id.match(/\d/)[0])

    if (diceState === 'dice-on') {
      selectDice(diceIndex)
    } else if (diceState === 'dice-off' && !savedDice.includes(index)) {
      deselectDice(diceIndex)
    }
  }

  const handleSelect = () => {
    rollCount > 0
      && inProgress
      && selectFunc()
  }

  return (
    <>
      <i
        onClick={handleSelect}
        style={{ 'animationName': diceState,
                 'color': `${color}` }}
        className={`hvr-grow-rotate dice fas fa-dice-${num}`}
        id={id} />
    </>
  )
}

const mapStateToProps = state => ({
  savedDice: state.turn.savedDice,
  inProgress: state.currentGame.inProgress,
  rollCount: state.turn.rollCount,
  color: state.scorecards[state.currentGame.currentPlayer].color
})

export default connect(mapStateToProps, { selectDice, deselectDice })(Dice)