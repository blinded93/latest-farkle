import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { checkForScore, checkForFarkle } from '../../logic/game'
import { updateScore } from '../../actions/turn'
import { finishGame } from '../../actions/game'

const Score = props => {
  const { finalDice, selectedDiceIndexes, selectedScore, totalScore,
          updateScore, scoreToBeat, finishGame, currentPlayer, winner,
          unsavedDice, scorecards, gameId, lastPlayer } = props
  const scorecardId = scorecards[currentPlayer].id
  const displayedScore = selectedScore + totalScore
  const display = winner
                    ? `${scorecards[winner].name} won!`
                    : `Turn Score: ${displayedScore}`

  useEffect(() => {
    if (finalDice[0]) {
      const diceFromIndexes = indexes => indexes.map(i => finalDice[i])
      const score = checkForScore(diceFromIndexes(selectedDiceIndexes))

      updateScore(score)
      if (scoreToBeat && currentPlayer === lastPlayer) {
        const newScore = checkForFarkle(diceFromIndexes(unsavedDice))
                         + displayedScore
        const scorecard = {
          player: currentPlayer, score: newScore, id: scorecardId
        }
        const gameData = {
          winner: currentPlayer, in_progress: false,
          game: { id: gameId }, current_player: currentPlayer 
        }

        newScore > scoreToBeat
          && finishGame(gameData, localStorage.token, scorecard)
      }
    }
  }, [updateScore, currentPlayer, finishGame, displayedScore, scorecardId,
      selectedDiceIndexes, finalDice, scoreToBeat, unsavedDice, gameId, lastPlayer])

  return (
    <>
      <h4 className='text-danger'>{display} &nbsp;&nbsp;<small>{lastPlayer && !winner && 'Last Turn!'}</small></h4>
      
    </>
  )
}

const mapStateToProps = ({ turn, currentGame, scorecards }) => {
  return {
    lastPlayer: currentGame.lastPlayer,
    scorecards: scorecards,
    gameId: currentGame.id,
    winner: currentGame.winner,
    currentPlayer: currentGame.currentPlayer,
    scoreToBeat: turn.scoreToBeat,
    finalDice: turn.finalDice,
    unsavedDice: turn.unsavedDice,
    selectedDiceIndexes: turn.selectedDiceIndexes,
    savedDice: turn.savedDice,
    selectedScore: turn.selectedScore,
    totalScore: turn.totalScore
  }
  
}

export default connect(mapStateToProps, { updateScore, finishGame })(Score)