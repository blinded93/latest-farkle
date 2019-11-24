import React from 'react'
import { Form } from 'react-bootstrap'
import NewGameColors from './NewGameColors'

const NewGameForm = props => {
  const { onChange, onSubmit } = props

  return (
    <>
      <form
        id='new-game-form'
        onSubmit={e => onSubmit(e)}>
        <Form.Group>
          <Form.Control
            name='player1.name'
            type='text'
            placeholder='Player 1'
            onChange={e => onChange(e)} />
        </Form.Group>
        <Form.Label>
          Player 1 color:
        </Form.Label>
        <Form.Group>
          <NewGameColors
            playerNumber='player1'
            onChange={onChange} />
        </Form.Group>
        <Form.Group>
          <Form.Control
            name='player2.name'
            type='text'
            placeholder='Player 2'
            onChange={e => onChange(e)} />
        </Form.Group>
        <Form.Label>
          Player 2 color:
        </Form.Label>
        <Form.Group>
          <NewGameColors
            playerNumber='player2'
            onChange={onChange} />
        </Form.Group>
      </form>
    </>
  )
}

export default NewGameForm