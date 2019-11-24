import React from 'react'
import { Modal } from 'react-bootstrap'
import { connect } from 'react-redux'
import { modalShow, modalClose } from '../../actions/modal'
import ModalTypeDecipher from '../../components/ModalTypeDecipher'

const MainModal = props => {
  const { modalShown, modalClose } = props

  return (
    <Modal
      backdrop='static'
      show={modalShown}
      onHide={modalClose}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <ModalTypeDecipher {...props} />
    </Modal>
  )
}

const mapStateToProps = state => state.modal

export default connect(mapStateToProps, { modalShow, modalClose })(MainModal)