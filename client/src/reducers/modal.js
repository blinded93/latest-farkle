const initialState = {
  modalShown: false,
  modalType: '',
  modalInfo: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'MODAL_SHOW':
      return {
        modalShown: true,
        modalType: action.modalType,
        modalInfo: action.info
      }

    case 'MODAL_CLOSE':
      return {
        ...state,
        modalShown: false,
      }

    default:
      return state
  }
}