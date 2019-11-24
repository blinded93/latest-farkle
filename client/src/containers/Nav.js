import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'
import { modalShow } from '../actions/modal'
import { authSuccess } from '../actions/auth'
import { verifyUser } from '../actions/users'
import MenuItems from '../components/MenuItems'
import MainModal from './modal/Modal'
import Brand from '../components/Brand'

class Navigation extends Component {
  componentDidMount() {
    const { verifyUser } = this.props
    const user = localStorage.user

    !!user && verifyUser(localStorage.token)
  }

  render () {
    const { currentUser, errors, modalShow } = this.props

    return (
      <>
        <Navbar
          fixed='top'
          collapseOnSelect
          expand='sm'
          bg='dark'
          variant='dark'>
            <Nav className='mr-auto'>
              <Brand modalOpen={modalShow} />
            </Nav>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className='ml-auto'>
                <MenuItems
                  currentUser={currentUser}
                  modalShow={modalShow} />
              </Nav>
            </Navbar.Collapse>
        </Navbar>
        <MainModal errors={errors} />
      </>
    )
  }
}

const mapStateToProps = state => state.auth

export default connect(mapStateToProps, { modalShow, authSuccess, verifyUser })(Navigation)