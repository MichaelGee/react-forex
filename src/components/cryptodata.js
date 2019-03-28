import React, { Component } from "react";
import Cryptcard from "./cryptcard";
/*import { Line } from "react-chartjs-2";*/
import axios from "axios";
import Infocard from "./infocard";
class Cryptodata extends Component {
  state = {
    time: "",
    EUR: "",
    CNH: "",
    JPY: "",
    GBP: "",
    AUD: "",
    CAD: "",
    CHF: "",
    SEK: "",
    NZD: "",
    USD: ""
  };

  componentDidMount() {
    this.api_call();
    /*setInterval(this.api_call, 60000);*/
  }

  api_call = () => {
    /*axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://www.freeforexapi.com/api/live?`
      )
      .then(res => {
       console.log( res.data );
      })
      .catch(error => {
        console.log(error);
      });*/

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,LTC,XRP,XLM,XMR&tsyms=USD`
      )
      .then(res => {
        this.setState({
          time: res.headers.date,
          USD: res.data.DISPLAY.BTC.USD.IMAGEURL
        });
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        {/*<Line data={data} />*/}
        <Infocard time={this.state.time} USD={this.state.USD} />
        <Cryptcard USD={this.state.USD} />
      </div>
    );
  }
}

export default Cryptodata;

/*<style jsx>{`
            .container {
              margin: 250px auto;
              overflow: hidden;
              width: 80%;
              text-align: center;
            }
          `}</style>*/

/*const data = {
      labels: [
        "Tanzania",
        "Egypt",
        "Algeria",
        "Ethiopia",
        "Kenya",
        "Nigeria",
        "DRC",
        "Sudan",
        "South Africa",
        "Uganda"
      ],
      datasets: [
        {
          label: "Population",
          data: [
            181563000,
            89125000,
            39670000,
            103764000,
            45533000,
            181563000,
            77267000,
            40235000,
            54957000,
            37102000
          ],
          fill: true, // Don't fill area under the line
          borderColor: "blue" // Line color
        }
      ]
    };*/
