import React, { Component } from 'react';

import Header from './Header';
// import Footer from './Footer';

export default class MainLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={{ marginTop: '96px' }}>{this.props.children}</div>
        {/* <Footer /> */}
      </div>
    );
  }
}
