import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Table } from 'react-bootstrap'
import { getGames } from '../actions/games'
import GameRows from '../components/games/GameRows'
import LoadMoreBtn from '../components/games/LoadGamesBtn'

class Games extends Component {
  componentDidMount() {
    const { games, getGames } = this.props

    games.page === 0 && getGames(1, localStorage.token)
  }

  render() {
    const { games, getGames } = this.props

    return (
      <>
        <Container>
          {
            !games.list[0]
              ? (<h5 className='text-center'>No games to display</h5>)
              : (
                  <>
                    <Table
                      borderless
                      size='sm'>
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Player 1</th>
                          <th>Score</th>
                          <th>Player 2</th>
                          <th>Score</th>
                        </tr>
                      </thead>
                      <tbody>
                        <GameRows />
                      </tbody>
                    </Table>
                    <div className='text-center'>
                      <LoadMoreBtn
                        getGames={getGames}
                        games={games} />
                    </div>
                  </>
                )
          }
        </Container>
      </>
    )
  }
}

const mapStateToProps = ({ games }) => ({ games })

export default connect(mapStateToProps, { getGames })(Games)