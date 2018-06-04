import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/header.css';

import mjscLogo from '../assets/graphics/mjscLogo.png';

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar is-fixed-top">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img src={mjscLogo} className="navbarLogo" alt="" />
            </a>
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div className="navbar-menu">
            <NavLink to="/" className="navbar-item">
              Home
            </NavLink>
            <NavLink to="/trainingschedule" className="navbar-item">
              Training Schedules
            </NavLink>
            <NavLink to="/about" className="navbar-item">
              About
            </NavLink>
            <NavLink to="/franchise" className="navbar-item">
              Franchise
            </NavLink>
            <NavLink to="/scholarships" className="navbar-item">
              Scholarships
            </NavLink>
            <NavLink to="/sponsors" className="navbar-item">
              Become a Sponsor!
            </NavLink>
            <NavLink to="/contact" className="navbar-item">
              Contact Us
            </NavLink>
          </div>
        </nav>
      </div>
    );
  }
}
