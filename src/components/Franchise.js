import React, { Component } from 'react';
import '../css/franchises.css';

import franchises from '../data/franchiseCities';

export default class Franchise extends Component {
  render() {
    let franchiseList = franchises.map((details, index) => {
      let cityList = details.cities.map((details, index) => {
        return (
          <div key={index}>
            <p>{details}</p>
          </div>
        );
      });

      return (
        <div
          key={index}
          className="column is-one-fifth-desktop is-3-tablet is-one-third-mobile has-text-centered"
        >
          <h3 className="is-size-4 is-size-5-mobile has-text-black">{details.state}</h3>
          <div className="is-size-6 is-size-7-mobile has-text-black">{cityList}</div>
        </div>
      );
    });

    return (
      <div className="section">
        <div className="has-text-centered franchiseText">
          <h1 className="is-size-2">Interested in starting a franchise?</h1>
          <h3 className="is-size-3">MJSC will show you how it works.</h3>
          <p className="is-size-5">
            You don't even need to play soccer to operate the MJSC franchise - our MJSC manual
            contains all the information you need to be successful in your new franchise.
          </p>
        </div>
        <div className="columns is-multiline is-mobile">{franchiseList}</div>
      </div>
    );
  }
}
