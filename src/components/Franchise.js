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
          className="column is-one-fifth-desktop is-3-tablet is-half-mobile has-text-centered"
        >
          <h3 className="is-size-4 is-size-5-mobile has-text-white">{details.state}</h3>
          <div className="is-size-6 is-size-7-mobile has-text-white">{cityList}</div>
        </div>
      );
    });

    return (
      <div className="section is-marginless is-paddingless franchiseBackground">
        <div className="is-marginless has-text-centered franchiseText has-text-white">
          <h1 className="is-size-2 is-size-4-mobile has-text-white">
            Interested in starting a franchise?
          </h1>
          <h3 className="is-size-3 is-size-5-mobile has-text-white">
            MJSC will show you how it works.
          </h3>
          <p className="is-size-5 is-size-6-mobile has-text-white georgiaFont">
            You don't even need to play soccer to operate the MJSC franchise - our MJSC manual
            contains all the information you need to be successful in your new franchise.
          </p>
        </div>
        <div className="columns is-multiline is-marginless is-mobile has-text-white franchiseText">
          {franchiseList}
        </div>
      </div>
    );
  }
}
