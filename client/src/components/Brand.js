import React from 'react'
import { Navbar, Nav, Badge } from 'react-bootstrap'
import { IndexLinkContainer } from 'react-router-bootstrap'

const Brand = props => {
  const { modalOpen } = props

  return (
    <>
      <Navbar.Brand>
        <IndexLinkContainer to='/'>
          <Nav.Link className='d-inline'>Farkle</Nav.Link>
        </IndexLinkContainer>
        <small>
          <Badge
            className='ml-2 pointer'
            onClick={e => modalOpen('NewGame')}
            variant='secondary'>
              New
          </Badge>
        </small>
      </Navbar.Brand>
    </>
  )
}

export default Brand