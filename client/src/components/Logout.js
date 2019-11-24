import React from 'react'
import { logout } from '../actions/auth'
import { Button, Modal } from 'react-bootstrap'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const Logout = props => {
  const { logout, modalClose } = props

  const logoutAndClose = () => {
    props.history.replace('/')
    logout()
    modalClose()
  }

  return (
    <>
      <Modal.Body>
        <div className='text-center'>
          <div className='mb-2'>Are you sure you want to logout?</div>
          <Button
            className='mr-1'
            size='sm'
            variant='outline-danger'
            onClick={e => logoutAndClose()}>
              Logout
          </Button>
          <Button
            className='ml-1'
            size='sm'
            variant='outline-dark'
            onClick={modalClose}>
              Cancel
          </Button>
        </div>
      </Modal.Body>
    </>
  )
}

export default withRouter(connect(null, { logout })(Logout))