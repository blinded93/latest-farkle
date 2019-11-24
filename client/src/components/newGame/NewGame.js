import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { connect } from 'react-redux'
import NewGameForm from './NewGameForm'
import { createGame } from '../../actions/game'

class NewGame extends Component {
  state = {
    player1: {
      name:'',
      color:''
    },
    player2: {
      name:'',
      color:''
    }
  }

  onChange = e => {
    const [ player, attr ] = e.target.name.split('.')

    this.setState({
      [player]: {
        ...this.state[player],
        [attr]: e.target.value
      }
    })
  }

  onSubmit = e => {
    e.preventDefault()
    const { createGame } = this.props
    
    createGame(this.state, localStorage.token)
    this.props.modalClose()
  }

  render() {
    return (
      <>
        <Modal.Header closeButton>
          <h5>New Game</h5>
        </Modal.Header>
        <Modal.Body>
          <div className='text-center'>
            <div className='mb-2'>
              <NewGameForm
                onChange={this.onChange}
                onSubmit={this.onSubmit} />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            form='new-game-form'
            size='sm'
            type='submit'
            variant='outline-success'>
              Create Game
          </Button>
        </Modal.Footer>
      </>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
})
export default connect(mapStateToProps, { createGame })(NewGame)