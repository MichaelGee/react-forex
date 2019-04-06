import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Forex from "./pages/forex";
import Crypto from "./pages/crypto";

class Welcome extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={Forex} />
            <Route exact path='/forex' component={Forex} />
            <Route path='/crypto' component={Crypto} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Welcome;
