import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Buttons from './Buttons'
import Scorecard from './Scorecard'
import Score from './Score'
import DiceRow from './DiceRow'

const DesktopBoard = props => {
  return (
    <>
      <Row>
        <Col xl={2} lg={2} md={1} sm={1} xs={0}></Col>
        <Col className='sm-game-left' xl={1} lg={1} md={2} sm={2} xs={3}>
          <DiceRow boardState='desktop' positions={[0]} />
        </Col>
        <Col xl={7} lg={7} md={8} sm={8} xs={8} className='ml-3'>
          <Score />
          <Scorecard />
          <div className='mt-3 d-flex justify-content-between'>
            <Buttons />
          </div>
        </Col>
        <Col xs={1}></Col>
      </Row>
    </>
  )
}

export default DesktopBoard