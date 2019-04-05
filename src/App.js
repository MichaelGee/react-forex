import React, { Component } from "react";
import "./App.css";
import Welcome from "./components/welcome";
import Forex from "./components/pages/forex";
import Crypto from "./components/pages/crypto";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={Welcome} />
            <Route exact path='/forex' component={Forex} />
            <Route path='/crypto' component={Crypto} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
