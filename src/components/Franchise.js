import React, { Component } from 'react';

import franchises from '../data/franchiseCities';

export default class Franchise extends Component {
  render() {
    let cities = '';

    let franchiseList = franchises.map((details, index) => {
      return (
        <div key={index} className="column is-2 has-text-centered cities">
          <h3 className="is-size-4 has-text-black">{details.state}</h3>
          <p className="is-size-6 has-text-black">{details.cities}</p>
        </div>
      );
    });

    return (
      <div>
        <h1>Franchise Information</h1>
        <div className="columns is-multiline">{franchiseList}</div>
      </div>
    );
  }
}
