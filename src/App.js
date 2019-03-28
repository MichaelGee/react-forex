import React, { Component } from "react";
import "./App.css";
import Bar from "./components/navbar";
import Forex from "./components/pages/forex";
import Crypto from "./components/pages/crypto";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Bar />
          <Switch>
            <Route path="/forex" component={Forex} />
            <Route path="/crypto" component={Crypto} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
