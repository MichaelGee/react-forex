import React from "react";
import { Card } from "react-bootstrap";

const style = {
  card: { margin: "50px auto", width: "60%" }
};

const Infocard2 = props => {
  return (
    <div>
      <Card style={style.card}>
        <Card.Body>
          <p className='card-text text-center'>
            ForeX gets you the latest figures in the exchange market, from
            regular currencies to cryptocurrency.
          </p>
          <h5 className='text-center'>{props.time}</h5>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Infocard2;
