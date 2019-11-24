import React from 'react'
import { connect } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'
import { deleteGame } from '../actions/games'
import { modalClose } from '../actions/modal'

const DeleteGame = ({ gameId, deleteGame, modalClose }) => {
  const handleClick = () => {
    deleteGame(gameId, localStorage.token)
    modalClose()
  }
  
  return (
    <>
      <Modal.Header closeButton />
      <Modal.Body>
        <div className='text-center'>
          <div className='mb-2'>Delete Game ID {gameId}?</div>
          <Button
            className='mr-1'
            size='sm'
            variant='outline-danger'
            onClick={handleClick}>
              Delete
          </Button>
        </div>
      </Modal.Body>
    </>
  )
}

const mapStateToProps = state => ({ gameId: state.modal.modalInfo })

export default connect(mapStateToProps, { deleteGame, modalClose })(DeleteGame)