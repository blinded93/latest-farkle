import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'

class Rules extends Component {
  threeDiceCol = (num, score) => (
    <Col className='text-right pr-3'>
      <i className={`rules-dice fas fa-dice-${num}`} />&nbsp;
      <i className={`rules-dice fas fa-dice-${num}`} />&nbsp;
      <i className={`rules-dice fas fa-dice-${num}`} />&nbsp;
      = {score} pts.
    </Col>
  )

  render() {
    return (
      <>
        <Container>
          <div className='pb-2 text-center'>
            <u className='h2'>Rules</u>
          </div>
          <Row>
            <Col>
              <Row>
                <Col>
                  <div className='pb-2 text-center'>
                    <b className='h4'>Scoring</b>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className='text-right'>
                  <i className="rules-dice fas fa-dice-five" /> FIVES = 50 points  &nbsp;
                </Col>
                <Col className='pl-4'>
                  <i className="rules-dice fas fa-dice-one" /> ONES = 100 points
                </Col>
              </Row>
              <Row>
                {this.threeDiceCol('one', 300)}
                <Col className='border-left pl-3'>
                  4 of any number = 1,000 pts.
                </Col>
              </Row>
              <Row>
                {this.threeDiceCol('two', 200)}
                <Col className='border-left pl-3'>
                  5 of any number = 2,000 pts.
                </Col>
              </Row>
              <Row>
                {this.threeDiceCol('three', 300)}
                <Col className='border-left pl-3'>
                  6 of any number = 3,000 pts.
                </Col>
              </Row>
              <Row>
                {this.threeDiceCol('four', 400)}
                <Col className='border-left pl-3'>
                  1-6 straight = 1,500 pts.
                </Col>
              </Row>
              <Row>
                {this.threeDiceCol('five', 500)}
                <Col className='border-left pl-3'>
                  Three pairs = 1,500 pts.
                </Col>
              </Row>
              <Row>
                {this.threeDiceCol('six', 600)}
                <Col className='border-left pl-3'>
                  Four of any number<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  with a pair = 1,500 pts.
                </Col>
              </Row>
              <Row>
                <Col>
                </Col>
                <Col className='border-left pl-3'>
                  Two triplets = 2,500 pts.
                </Col>
              </Row>
            </Col>
            <Col>
             <h4>Objective</h4>
             <p>To score points through systematic rolling of the dice.</p>
             <h5>How to Play</h5>
             <p>The first player rolls 6 dice and selects (sets aside) any scoring dice that appear. Players can continue to roll the remaining dice for more points, setting aside a minimum of 1 scoring dice each turn. 500 points must be collected before points can be added to scorecard (banked). If a roll does not contain any scoring dice, the player has 'FARKLED' and loses points and turn.</p>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

const mapStateToProps = state => { return state }

export default connect(mapStateToProps, {})(Rules)