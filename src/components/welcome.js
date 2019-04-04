import React from "react";
import { Card, Container, ButtonToolbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <Container className='Welcard'>
        <Card className='shadow p-3 mb-5 bg-white rounded'>
          <Card.Body>
            <p className='welcome'>
              Wecome to Exchange!
              <br />
              You can get the latest updates from the top Currencies and
              Cryptocurrencies.
            </p>
            <ButtonToolbar className='d-flex justify-content-center'>
              <Link to='/forex'>
                <Button variant='primary' size='md'>
                  Forex
                </Button>
              </Link>
              <Link to='/crypto'>
                <Button variant='primary' size='md'>
                  Cryptocurrency
                </Button>
              </Link>
            </ButtonToolbar>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};
