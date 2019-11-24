import React, { Fragment } from 'react'
import { connect} from 'react-redux'
import DeleteRowBtn from './DeleteRowBtn'
import GameCols from './GameCols'
import { IndexLinkContainer } from 'react-router-bootstrap'
import { updateScorecards } from '../../actions/scorecards'
import { displayGame } from '../../actions/game'

const GameRows = props => {
  const { games, updateScorecards, displayGame } = props
  const handleProgress = progress => {
    return progress ? 'table-success' : 'table-warning'
  }
  const handleClick = game => {
    updateScorecards(game.scorecards)
    displayGame(game)
  }

  return (
    <>
      {
        !!games[0] &&
        games.map(game => (
          <Fragment key={`game-${game.id}`} >
            <IndexLinkContainer to='/'>
              <tr
                id={`game-${game.id}`}
                onClick={e => handleClick(game)}
                className={handleProgress(game.inProgress) + ' pointer'}>
                  <GameCols game={game} />
                  <DeleteRowBtn gameId={game.id} />
              </tr>
            </IndexLinkContainer>
          </Fragment>
        ))
      }
    </>
  )
}

const mapStateToProps = state => ({ games: state.games.list })

export default connect(mapStateToProps, { updateScorecards, displayGame })(GameRows)