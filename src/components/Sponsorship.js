import React, { Component } from 'react';
import '../css/sponsorship.css';

import sponsorshipInfo from '../assets/graphics/mjscScholarships.png';
export default class Sponsorship extends Component {
  render() {
    return (
      <div className="section is-marginless sponsorshipContainer">
        <img src={sponsorshipInfo} alt="" className="sponsorshipInfo" />
      </div>
    );
  }
}
