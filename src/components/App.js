import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../css/App.css';

import MainLayout from './MainLayout';
import Home from './Home';
import TrainingSchedule from './TrainingSchedule';
import AboutUs from './AboutUs';
import Franchise from './Franchise';
import Scholarships from './Scholarships';
import Sponsorship from './Sponsorship';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <MainLayout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/trainingschedule" component={TrainingSchedule} />
              <Route path="/about" component={AboutUs} />
              <Route path="/franchise" component={Franchise} />
              <Route path="/scholarship" component={Scholarships} />
              <Route path="/sponsorship" component={Sponsorship} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </MainLayout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
