export const modalShow = (modalType, info) => {
  return {
    type: 'MODAL_SHOW',
    modalType,
    info
  }
}

export const modalClose = () => {
  return {
    type: 'MODAL_CLOSE'
  }
}