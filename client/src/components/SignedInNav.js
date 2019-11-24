import React from 'react'
import { Nav } from 'react-bootstrap'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'

const SignedInNav = ({ modalOpen }) => {
  return (
    <>
      <IndexLinkContainer to='/'>
        <Nav.Link>Home</Nav.Link>
      </IndexLinkContainer>
      <LinkContainer to='rules'>
        <Nav.Link>Rules</Nav.Link>
      </LinkContainer>
      <LinkContainer to='games'>
        <Nav.Link>Games</Nav.Link>
      </LinkContainer>
      <Nav.Link onClick={e => modalOpen('Logout')}>
          Logout
      </Nav.Link>
    </>
  )
}

export default SignedInNav