import React, { Component } from 'react';
import '../css/footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="has-background-light footerControl">
        <p className="has-text-centered-mobile is-size-7">
          Copyright © 2018 Mount Juliet Soccer Club Inc. All rights reserved
        </p>
        <p className="has-text-centered-mobile is-size-7">Created by A Mighty Empire LLC</p>
      </div>
    );
  }
}
