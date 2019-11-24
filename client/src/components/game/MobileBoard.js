import React from 'react'
import { Row, Col, Navbar } from 'react-bootstrap'
import Buttons from './Buttons'
import Scorecard from './Scorecard'
import Score from './Score'
import DiceRow from './DiceRow'

const MobileBoard = props => {
  return (
    <>
      <Row>
        <Col></Col>
        <DiceRow boardState='mobile' positions={[0, 3]} />
        <Col></Col>
      </Row>
      <Row className='mt-3'>
        <Col></Col>
        <DiceRow boardState='mobile' positions={[3]} />
        <Col></Col>
      </Row>
      <Row className='mt-3'>
        <Col>
          <Score />
          <Scorecard />
        </Col>
      </Row>
      <Navbar fixed='bottom'
        expand='sm'
        bg='dark'
        variant='dark'>
        <Buttons />
      </Navbar>
    </>
  )
}

export default MobileBoard