import React, { Component } from 'react';
import { Transition } from 'react-transition-group';

import Header from './Header';
import Footer from './Footer';

export default class MainLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Transition timeout={50}>
          <div className="bodyMargin">{this.props.children}</div>
        </Transition>
        <Footer />
      </div>
    );
  }
}
