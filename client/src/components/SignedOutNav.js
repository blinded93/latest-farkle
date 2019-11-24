import React from 'react'
import { Nav } from 'react-bootstrap'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'

const SignedOutNav = ({ modalOpen }) => {
  return (
    <>
      <LinkContainer to='rules'>
        <Nav.Link>
          Rules
        </Nav.Link>
      </LinkContainer>
      <span style={{'fontSize': 25, color: 'dark-brown'}}>|</span>
      <IndexLinkContainer to='/'>
        <Nav.Link onClick={e => modalOpen('Login')}>
            Login
        </Nav.Link>
      </IndexLinkContainer>
      <IndexLinkContainer to='/'>
        <Nav.Link onClick={e => modalOpen('Signup')}>
            Signup
        </Nav.Link>
      </IndexLinkContainer>
    </>
  )
}

export default SignedOutNav