import React from 'react'
import { connect } from 'react-redux'
import { modalShow } from '../../actions/modal'

const DeleteRowBtn = ({ gameId, modalShow }) => {
  const handleClick = e => {
    e.stopPropagation()
    modalShow('DeleteGame', gameId)
  }

  return (
    <>
      <td className='text-right'>
        <span
          className='pointer'
          style={{fontSize: '20px'}}
          onClick={handleClick}> 
            &#10005;
        </span>
      </td>
    </>
  )
}

export default connect(null, { modalShow })(DeleteRowBtn)