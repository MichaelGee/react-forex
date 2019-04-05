import React, { Component } from "react";
import { Card, Container, Col, Row } from "react-bootstrap";
class Forexcard extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col sm>
              <Card className='datacard shadow-sm p-3 mb-5 bg-white rounded'>
                <Card.Body>
                  <h1>USD - NGN</h1>
                  <h5>Rate: ₦{this.props.NGN}</h5>
                </Card.Body>
              </Card>
            </Col>

            <Col sm>
              <Card className='datacard shadow-sm p-3 mb-5 bg-white rounded'>
                <Card.Body>
                  <h1>USD - EUR</h1>
                  <h5>Rate: €{this.props.EUR}</h5>
                </Card.Body>
              </Card>
            </Col>

            <Col sm>
              <Card className='datacard shadow-sm p-3 mb-5 bg-white rounded'>
                <Card.Body>
                  <h1>USD - JPY</h1>
                  <h5>Rate: ¥{this.props.JPY}</h5>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col sm>
              <Card className='datacard shadow-sm p-3 mb-5 bg-white rounded'>
                <Card.Body>
                  <h1>USD - GBP</h1>
                  <h5>Rate: £{this.props.GBP}</h5>
                </Card.Body>
              </Card>
            </Col>

            <Col sm>
              <Card className='datacard shadow-sm p-3 mb-5 bg-white rounded'>
                <Card.Body>
                  <h1>USD - AUD</h1>
                  <h5>Rate: ${this.props.AUD}</h5>
                </Card.Body>
              </Card>
            </Col>

            <Col sm>
              <Card className='datacard shadow-sm p-3 mb-5 bg-white rounded'>
                <Card.Body>
                  <h1>USD - CAD</h1>
                  <h5>Rate: ${this.props.CAD}</h5>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col sm>
              <Card className='datacard shadow-sm p-3 mb-5 bg-white rounded'>
                <Card.Body>
                  <h1>USD - CHF</h1>
                  <h5>Rate: CHf{this.props.CHF}</h5>
                </Card.Body>
              </Card>
            </Col>

            <Col sm>
              <Card className='datacard shadow-sm p-3 mb-5 bg-white rounded'>
                <Card.Body>
                  <h1>USD - SEK</h1>
                  <h5>Rate: kr{this.props.SEK}</h5>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className='datacard shadow-sm p-3 mb-5 bg-white rounded'>
                <Card.Body>
                  <h1>USD - NZD</h1>
                  <h5>Rate: ${this.props.NZD}</h5>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Forexcard;
