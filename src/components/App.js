import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../css/App.css';

import MainLayout from './MainLayout';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <MainLayout>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </MainLayout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
