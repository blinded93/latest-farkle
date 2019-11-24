import React, { useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import { finishGame } from '../../actions/game'
import { modalClose } from '../../actions/modal'
import ModalRollBtn from './ModalRollBtn'

const TurnChangeModal = props => {
  const { scorecards, currentPlayer, modalInfo, gameId, 
          lastTurn, winner, finishGame, modalClose, lastPlayer } = props
  const name = () => {
    const player = lastTurn && winner ? lastPlayer : currentPlayer

    return scorecards[player].name
  }

  useEffect (() => {
    if (lastTurn && modalInfo.includes('farkle')) {
      const otherPlayer = currentPlayer === 'player1' ? 'player2' : 'player1'
      const winningPlayer = modalInfo.includes('farkle')
        ? otherPlayer
        : currentPlayer
      const gameData = {
        winner: winningPlayer, game: { id: gameId }, in_progress: false
      }
      finishGame(gameData, localStorage.token)
    }
  }, [lastTurn])

  return (
    <>
      <Modal.Header closeButton />
      <Modal.Body className='text-center'>
        <h5>{name()} {modalInfo}</h5>
        {
          lastTurn && modalInfo.includes('points!')
            && (<h6 className='text-danger'>Last Chance!</h6>)
        }
      </Modal.Body>
      <Modal.Footer>
        {winner
          ? <Button
              block
              variant='outline-info'
              onClick={modalClose}>
                Close
            </Button>
          : <ModalRollBtn />}
      </Modal.Footer>
    </>
  )
}

const mapStateToProps = state => ({
  lastPlayer: state.currentGame.lastPlayer,
  gameId: state.currentGame.id,
  lastTurn: state.currentGame.lastTurn,
  winner: state.currentGame.winner,
  modalInfo: state.modal.modalInfo, 
  currentPlayer: state.currentGame.currentPlayer,
  scorecards: state.scorecards
})

export default connect(mapStateToProps, { finishGame, modalClose })(TurnChangeModal)