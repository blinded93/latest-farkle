import React from 'react'
import { Form } from 'react-bootstrap'

const NewGameColors = props => {
  const { playerNumber, onChange } = props
  const colors = {
    'blue': 'primary',
    'red': 'danger',
    'green': 'success',
    'yellow': 'warning',
    'teal': 'info',
    'black': 'dark'
  }

  return (
    <>
      {
        Object.keys(colors).map(key => (
          <Form.Check inline
            key={key}
            className={`badge pl-1 pt-1 pb-1 bg-${colors[key]}`}
            type='radio'
            name={`${playerNumber}.color`}
            value={key}
            onChange={e => onChange(e)} />
        ))
      }
    </>
  )
}

export default NewGameColors