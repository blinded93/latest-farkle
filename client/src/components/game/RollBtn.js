import React from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { rollDice, deselectAll, updateTotal } from '../../actions/turn'
import { isEmpty } from '../../tools'
import { checkForScore } from '../../logic/game'

const RollBtn = props => {
  const { dice, selectedDiceIndexes, savedDice, rollCount } = props.turn
  const { inProgress } = props.currentGame
  const { rollDice, updateTotal, deselectAll } = props
  const selectedDice = dice.filter((_, i) => selectedDiceIndexes.includes(i))
  const scoreCheck = checkForScore(selectedDice)
  const selectedAndSavedDice = [
    ...new Set([...selectedDiceIndexes, ...savedDice])
  ]
  const extraRoll = (yes, no) => selectedAndSavedDice.length === 6 && scoreCheck ? yes : no

  const handleDisable = () => {
    if (!inProgress) return true
    else if (rollCount === 0) return false
    else if (!isEmpty(selectedDiceIndexes)
              && scoreCheck) return false
    else if (isEmpty(selectedDiceIndexes)
              || !scoreCheck) return true
  }

  const handleClick = e => {
    if (rollCount === 0) deselectAll()
    if (selectedAndSavedDice.length === 6) {
      deselectAll()
      rollDice(dice, [])
    } else {
      rollDice(dice, selectedAndSavedDice)
    }
    updateTotal()
  }

  return (
    <>
      <Button
        onClick={handleClick}
        style={{ width: '47%' }}
        variant={extraRoll('success', 'outline-success')}
        disabled={handleDisable()}>
          {extraRoll('Roll Again!', 'Roll')}
      </Button>
    </>
  )
}

const mapStateToProps = ({ turn, currentGame }) => ({ turn, currentGame })

export default connect(mapStateToProps, { rollDice, deselectAll, updateTotal })(RollBtn)