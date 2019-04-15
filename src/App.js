import React, { Component } from "react";
import "./App.css";
import Bar from "./components/navbar";
import Forex from "./components/pages/forex";
import Crypto from "./components/pages/crypto";

class App extends Component {
  render() {
    return (
      <div>
        <Bar />
        <Forex />
        <Crypto />
      </div>
    );
  }
}

export default App;
