import React, { Component } from 'react';
import mjscLogo from '../assets/graphics/mjscLogo.png';
import '../css/home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <section className="hero is-fullheight">
          <div className="hero-body soccerBackground">
            <div className="container has-text-centered content">
              <img src={mjscLogo} className="homeLogoControl" alt="" />
              <p className="is-size-1 is-size-4-mobile has-text-black">
                The USA's Premier Private Soccer Training
              </p>
              <p className="is-size-3 is-size-5-mobile has-text-white">
                Improve your skills while learning to play the game the right way!
              </p>
              <p className="is-size-4 is-size-6-mobile has-text-white">
                Mount Juliet Soccer Club provides soccer training clinics for groups and individuals
                of all age groups. With hands on training from one of Scotland's top coaches,
                players learn:
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
