import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/header.css';

import mjscLogo from '../assets/graphics/mjscLogo.png';

export default class Header extends Component {
  burgerClick = () => {
    document.getElementsByClassName('navbar-burger')[0].classList.toggle('is-active');
    document.getElementById('dropdownTarget').classList.toggle('is-active');
  };

  handleNavbar = () => {
    document.getElementsByClassName('navbar-burger')[0].classList.remove('is-active');
    document.getElementById('dropdownTarget').classList.remove('is-active');
  };

  render() {
    return (
      <div>
        <nav className="navbar is-fixed-top">
          <div className="navbar-brand">
            <a className="navbar-item" href="/" onClick={this.handleNavbar}>
              <img src={mjscLogo} className="navbarLogo" alt="" />
            </a>
            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="dropdownTarget"
              onClick={this.burgerClick}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div id="dropdownTarget" className="navbar-menu">
            <NavLink to="/" className="navbar-item" onClick={this.handleNavbar}>
              Home
            </NavLink>
            <NavLink to="/trainingschedule" className="navbar-item" onClick={this.handleNavbar}>
              Training Schedules
            </NavLink>
            <NavLink to="/about" className="navbar-item" onClick={this.handleNavbar}>
              About
            </NavLink>
            <NavLink to="/franchise" className="navbar-item" onClick={this.handleNavbar}>
              Franchise
            </NavLink>
            <NavLink to="/scholarships" className="navbar-item" onClick={this.handleNavbar}>
              Scholarships
            </NavLink>
            <NavLink to="/sponsors" className="navbar-item" onClick={this.handleNavbar}>
              Become a Sponsor!
            </NavLink>
            <NavLink to="/contact" className="navbar-item" onClick={this.handleNavbar}>
              Contact Us
            </NavLink>
          </div>
        </nav>
      </div>
    );
  }
}
