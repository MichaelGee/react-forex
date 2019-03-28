import React from "react";
import { Card, Container, Col, Row } from "react-bootstrap";
import Media from "react-bootstrap/Media";

const Cryptcard = props => {
  return (
    <Container>
      <Row>
        <Col sm>
          <Card>
            <Card.Body>
              <h4>Bitcoin</h4>
              <h4>{props.USD}</h4>
            </Card.Body>
          </Card>
        </Col>

        <Col sm>
          <Card>
            <Card.Body>
              <h4>Ethereum</h4>
              <h4>{props.USD}</h4>
            </Card.Body>
          </Card>
        </Col>

        <Col sm>
          <Card>
            <Card.Body>
              <h4>Litecom</h4>
              <Media>
                <Media.Body />
              </Media>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col sm>
          <Card>
            <Card.Body>
              <h4>Ripple</h4>
              <h4>{props.USD}</h4>
            </Card.Body>
          </Card>
        </Col>

        <Col sm>
          <Card>
            <Card.Body>
              <h4>Stellar</h4>
              <h4>{props.USD}</h4>
            </Card.Body>
          </Card>
        </Col>

        <Col sm>
          <Card>
            <Card.Body>
              <h4>Monero</h4>
              <h4>{props.USD}</h4>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cryptcard;
