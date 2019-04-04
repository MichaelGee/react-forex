import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
const Bar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <Link to='/'>
        <h3>Exchange</h3>
      </Link>
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
          <li className='nav-item active' id='forex'>
            <Link to='/forex'>Forex</Link>
          </li>
          <li className='nav-item'>
            <Link to='/crypto'>Crypto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Bar;

/*
 */
