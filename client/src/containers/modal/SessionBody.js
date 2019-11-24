import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import Login from '../../components/Login'
import Signup from '../../components/Signup'
import { createUser, authenticate } from '../../actions/users'
import { connect } from 'react-redux'
import { noneBlankStringValues } from '../../tools'

class SessionBody extends Component {
  state = {
    username: '',
    email: '',
    identifier: '',
    password: ''
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e, fields) => {
    const { createUser, authenticate, modalClose } = this.props
    e.preventDefault()

    !!fields.login
      ? authenticate(fields.login, modalClose)
      : createUser(fields.signup, modalClose)
  }

  formComponent = form => {
    const { errors, modalType } = this.props

    if (form) {
      const formComponents = { 'Login': Login, 'Signup': Signup }
      const SelectedForm = formComponents[form]

      return <SelectedForm
              fields={noneBlankStringValues(modalType, this.state)}
              onChange={this.onChange}
              onSubmit={this.onSubmit}
              errors={errors} />
    }
  }

  render() {
    const { modalType } = this.props

    return (
      <>
        <Modal.Header closeButton><strong>{modalType}</strong></Modal.Header>
        <Modal.Body>
          {this.formComponent(modalType)}
        </Modal.Body>
      </>
    );
  }
}

const mapStateToProps = state => state.auth

export default connect(mapStateToProps, { createUser, authenticate })(SessionBody)