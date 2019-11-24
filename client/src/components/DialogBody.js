import React from 'react'
import Logout from './Logout'
import NewGame from './newGame/NewGame'
import DeleteGame from './DeleteGame'
import TurnChangeModal from './game/TurnChangeModal'

const DialogBody = props => {
  const components = {
    'Logout': Logout,
    'NewGame': NewGame,
    'TurnChangeModal': TurnChangeModal,
    'DeleteGame': DeleteGame
  }
  const { modalClose, modalType } = props
  const SelectedComponent = components[modalType]

  return (
    <>
      {<SelectedComponent modalClose={modalClose} />}
    </>
  )
}

export default DialogBody