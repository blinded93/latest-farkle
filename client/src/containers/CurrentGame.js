import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import MobileBoard from '../components/game/MobileBoard'
import DesktopBoard from '../components/game/DesktopBoard'
import { connect } from 'react-redux'

class CurrentGame extends Component {
  state = {
    width: window.innerWidth,
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWidth)
  }

  updateWidth = () => this.setState({ width: window.innerWidth })

  render() {
    const { currentGame } = this.props
    const { width } = this.state

    return (
      <>
        <Container>
          {
            width < 560
              ? <MobileBoard
                  currentGame={currentGame} />
              : <DesktopBoard
                  currentGame={currentGame} />
          }
        </Container>
      </>
    )
  }
}

const mapStateToProps = ({ currentGame }) => ({ currentGame })

export default connect(mapStateToProps)(CurrentGame)