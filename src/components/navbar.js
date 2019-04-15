import React, { Component } from "react";

import "../App.css";

class Bar extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <a href='#'>
            <h3>Exchange</h3>
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse navbarLink' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item active' id='forex' />
              <li className='nav-item' />
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Bar;
