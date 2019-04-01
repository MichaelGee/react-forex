import React, { Component } from "react";
import { Card } from "react-bootstrap";

const style = {
  card: { margin: "50px auto", width: "60%" }
};

class Infocard extends Component {
  render() {
    return (
      <div>
        <Card style={style.card}>
          <Card.Body>
            <p className='card-text text-center'>
              Cryptocurrency rates in the market for 6 major coins.
            </p>
            <p className='card-text text-center'>Data is updated every 30seconds</p>
            <h5 className='text-center'>{this.props.time}</h5>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Infocard;
