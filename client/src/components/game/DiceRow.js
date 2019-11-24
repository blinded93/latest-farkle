import React from 'react'
import { connect } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import Dice from './Dice'

const DiceRow = props => {
  const { dice, diceState, boardState, positions } = props
  const RowOrCol = boardState === 'desktop' ? Row : Col
  const rowDiceState = diceState.slice(positions[0], positions[1])

  return (
    <>
      {
        dice.slice(positions[0], positions[1]).map((num, key) => (
          <RowOrCol key={key + positions[0]}>
            <Dice
              diceState={rowDiceState[key]}
              num={num}
              id={`dice-${key + positions[0]}`} />
          </RowOrCol>
        ))
      }
    </>
  )
}

const mapStateToProps = state => ({
  dice: state.turn.dice,
  diceState: state.turn.diceState
})

export default connect(mapStateToProps)(DiceRow)