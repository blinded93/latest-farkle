import React, { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'

const Login = props => {
  const { onChange, onSubmit, fields, errors } = props
  const [ passwordType, setPasswordType ] = useState('password')
  const togglePasswordType = () => {
    passwordType === 'password'
      ? setPasswordType('text')
      : setPasswordType('password')
  }
  
  return (
    <>
      <form
        onSubmit={e => onSubmit(e, fields)}>
        <Form.Group>
          <Form.Control
            isInvalid={errors.length > 0}
            type='text'
            name='identifier'
            onChange={onChange}
            placeholder='Username or Email' />
        </Form.Group>
        <InputGroup
          className='form-group'>
          <Form.Control
            isInvalid={errors.length > 0}
            type={passwordType}
            name='password'
            onChange={onChange}
            placeholder='Password' />
          <InputGroup.Append>
            <InputGroup.Text
              onClick={togglePasswordType}>
              {
                passwordType === 'password'
                  ? <i className="fas fa-eye" />
                  : <i className="far fa-eye" />
              }
            </InputGroup.Text>
          </InputGroup.Append>
          <Form.Control.Feedback
            type='invalid'>{errors}
          </Form.Control.Feedback>
        </InputGroup>
        <Button
          block
          variant='outline-dark'
          type='submit'>
            Login
        </Button>
      </form>
    </>
  );
}

export default Login