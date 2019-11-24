import React from 'react'
import SignedOutNav from '../components/SignedOutNav'
import SignedInNav from '../components/SignedInNav'

const MenuItems = props => {
  const { currentUser, modalShow } = props

  return (
    <>
      {
        Object.keys(currentUser).length === 0
          ? ( <SignedOutNav modalOpen={modalShow} /> )
          : ( <SignedInNav modalOpen={modalShow} /> )
      }
    </>
  )
}

export default MenuItems