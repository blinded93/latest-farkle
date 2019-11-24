import React from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { updateScorecard } from '../../actions/scorecards'

const BankBtn = props => {
  const { updateScorecard, currentPlayer, scorecardId, totalScore, lastTurn, inProgress } = props

  const handleDisable = () => !inProgress || lastTurn || totalScore < 500

  const handleClick = e => {
    const scorecard = {
      player: currentPlayer,
      id: scorecardId,
      score: totalScore
    }

    totalScore >= 500
      && updateScorecard(scorecard, localStorage.token)
  }

  return (
    <>
      <Button
        onClick={handleClick}
        style={{ width: '47%' }}
        variant="outline-danger"
        disabled={handleDisable()}>
          Bank
      </Button>
    </>
  )

}

const mapStateToProps = state => {
  const scorecardId = state.scorecards[state.currentGame.currentPlayer].id
  
  return {
    inProgress: state.currentGame.inProgress,
    lastTurn: state.currentGame.lastTurn,
    currentPlayer: state.currentGame.currentPlayer,
    totalScore: state.turn.totalScore + state.turn.selectedScore,
    scorecardId
  }
}

export default connect(mapStateToProps, { updateScorecard })(BankBtn)