import React, { useEffect } from 'react'
import { Button, Tabs, Tab, Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import { updateScoreToBeat } from '../../actions/turn'
import { changeToLastTurn } from '../../actions/game'

const Scorecard = props => {
  const { scorecards, currentPlayer, lastTurn,
          updateScoreToBeat, changeToLastTurn } = props
  const tableRows = scoresPerTurn => (
    [...Array(7)].map((_, i) => (
      <tr key={`row-${i}`}>
        <td className='scores'>{scoresPerTurn[i]}</td>
        <td className='scores'>{scoresPerTurn[i + 7]}</td>
        <td className='scores'>{scoresPerTurn[i + 14]}</td>
      </tr>
    ))
  )

  useEffect(() => {
    if (!lastTurn && scorecards[currentPlayer].score >= 10000) changeToLastTurn()

    if (lastTurn) {
      const { player1, player2 } = scorecards
      const scoreToBeat = Math.abs(player1.score - player2.score)

      updateScoreToBeat(scoreToBeat)
    }
  }, [lastTurn, scorecards, updateScoreToBeat, changeToLastTurn, currentPlayer])

  return (
    <>
      <Tabs
        variant='pills'
        activeKey={currentPlayer}
        id="player-scorecards"
        as={Button}>
        {
          Object.keys(scorecards).map((string, key) => {
            const { name, score, scoresPerTurn } = scorecards[string]

            return (
              <Tab
                key={key}
                eventKey={`player${key + 1}`}
                title={`${name} (${score})`}>
                  <Table borderless size='sm' className='mt-2 text-center'>
                    <tbody>
                      {tableRows(scoresPerTurn)}
                      <tr>
                        <td></td><td></td><td className='text-right'><span className='font-weight-bold'>Total:</span>{`  ${score}`}</td>
                      </tr>
                    </tbody>
                  </Table>
              </Tab>
            )
          })
        }
      </Tabs>
    </>
  )
}

const mapStateToProps = state => ({
  lastTurn: state.currentGame.lastTurn,
  scorecards: state.scorecards,
  currentPlayer: state.currentGame.currentPlayer
})

export default connect(mapStateToProps, { updateScoreToBeat, changeToLastTurn })(Scorecard)