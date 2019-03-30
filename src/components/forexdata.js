import React, { Component } from "react";
import axios from "axios";
export default class Forexdata extends Component {
  state = {
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
    setInterval(api_call(), 30000);
  }

  api_call = () => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://www.freeforexapi.com/api/live?`
      )
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return <div />;
  }
}
