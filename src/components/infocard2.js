import React from "react";
import { Card } from "react-bootstrap";

const style = {
  card: { margin: "50px auto", width: "60%" }
};

const Infocard2 = props => {
  return (
    <div>
      <Card
        style={style.card}
        className='shadow p-3 mb-5 bg-white rounded card'
      >
        <Card.Body>
          <p className='card-text text-center'>
            The exchange rate for 9 major currencies and the Nigerian Naira.
          </p>
          <p className='card-text text-center'>
            Data is updated every 30seconds
          </p>
          <h5 className='text-center'>{props.time}</h5>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Infocard2;
