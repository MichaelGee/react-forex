import React, { Component } from "react";
import axios from "axios";
import Infocard2 from "./infocard2";
import Forexcard from "./forexcard";
export default class Forexdata extends Component {
  state = {
    time: "",
    NGN: "",
    EUR: "",
    CNH: "",
    JPY: "",
    GBP: "",
    AUD: "",
    CAD: "",
    CHF: "",
    SEK: "",
    NZD: ""
  };

  componentDidMount() {
    this.api_call();
    /*setInterval(api_call(), 30000);*/
  }

  api_call = () => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://www.freeforexapi.com/api/live?pairs=USDNGN,USDEUR,USDCNH,USDJPY,USDGBP,USDAUD,USDCAD,USDCHF,USDSEK,USDNZD`
      )
      .then(res => {
        this.setState({
          time: res.headers.date,
          NGN: res.data.rates.USDNGN.rate,
          EUR: res.data.rates.USDEUR.rate,
          CNH: res.data.rates.USDCNH.rate,
          JPY: res.data.rates.USDJPY.rate,
          GBP: res.data.rates.USDGBP.rate,
          AUD: res.data.rates.USDAUD.rate,
          CAD: res.data.rates.USDCAD.rate,
          CHF: res.data.rates.USDCHF.rate,
          SEK: res.data.rates.USDSEK.rate,
          NZD: res.data.rates.USDNZD.rate
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
        <Infocard2 time={this.state.time} />
        <Forexcard
          NGN={this.state.NGN}
          EUR={this.state.EUR}
          CNH={this.state.CNH}
          JPY={this.state.JPY}
          GBP={this.state.GBP}
          AUD={this.state.AUD}
          CAD={this.state.CAD}
          CHF={this.state.CHF}
          SEK={this.state.SEK}
          NZD={this.state.NZD}
        />
      </div>
    );
  }
}
