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
            <p className="card-text text-center">
              ForeX gets you the latest figures in the exchange market, from
              regular currencies to cryptocurrency.
            </p>
            <h5 className="text-center">{this.props.time}</h5>
            <h5 className="text-center">{this.props.EUR}</h5>
            <h5 className="text-center">{this.props.USD}</h5>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Infocard;
