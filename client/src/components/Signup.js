import React from 'react'
import { Form, Button } from 'react-bootstrap'

const Signup = props => {
  const { onChange, onSubmit, fields } = props
  const { errors } = props
  const ifErrorsFor = field => !!errors && errors[field]

  return (
    <>
      <form
        onSubmit={e => onSubmit(e, fields)}>
        <Form.Group>
          <Form.Control
            required
            isInvalid={ifErrorsFor('username')}
            type='text'
            name='username'
            onChange={onChange}
            placeholder='Username' />
          <Form.Control.Feedback
            type='invalid'>Username {ifErrorsFor('username')}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Control
            required
            isInvalid={ifErrorsFor('email')}
            type='email'
            name='email'
            onChange={onChange}
            placeholder='Email' />
          <Form.Control.Feedback
            type='invalid'>Email {ifErrorsFor('email')}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Control
            required
            isInvalid={ifErrorsFor('password')}
            type='password'
            name='password'
            onChange={onChange}
            placeholder='Password' />
          <Form.Control.Feedback
            type='invalid'>Password {ifErrorsFor('password')}
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          block
          variant='outline-dark'
          type='submit'>
          Signup
        </Button>
      </form>
    </>
  )
}

export default Signup