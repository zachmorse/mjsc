import React, { Component } from 'react';
import '../css/scholarships.css';
import mjscLogo from '../assets/graphics/mjscLogo.png';

export default class Scholarships extends Component {
  render() {
    return (
      <div className="section hero is-fullheight is-paddingless scholarshipsBackground">
        <div className="scholarshipText">
          <img src={mjscLogo} className="scholarshipLogoControl" alt="" />
          <div className="content has-text-centered">
            <h1 className="is-size-2 is-size-4-mobile has-text-white">
              World Wide Scholarships for Soccer Players
            </h1>
            <h3 className="is-size-3 is-size-5-mobile has-text-white">
              Would you like a scholarship playing soccer in the USA? MJSC can help you achieve your
              goals.
            </h3>
            <p className="is-size-5 is-size-6-mobile has-text-white georgiaFont">
              Contact James Picken for an inquiry at{' '}
              <a
                className="has-text-white"
                href="mailto:mtjulietsoccerclub@gmail.com?Subject=MJSC%20Scholarship%20Program"
                target="_top"
              >
                mtjulietsoccerclub@gmail.com
              </a>{' '}
            </p>
            <div className="bulletPoints">
              <div className="listCentering">
                <ul>
                  <li>You must have good standards at your high school or college</li>
                  <li>Must be a skilled player</li>
                  <li>You must submit a video of yourself playing and demonstrating your skills</li>
                  <li>NOTE: there is a charge for finding you a university</li>
                </ul>
              </div>
            </div>
            <div className="content">
              <p className="is-size-5-tablet bulletList">
                <span className="">
                  Contact Us <i className="far fa-futbol"> </i>
                </span>
                {'  '}
                P.O Box 863, Mount Juliet, TN 37122
              </p>
              <p className="is-size-5-tablet bulletList">
                615-603-0785{' '}
                <span className="">
                  {' '}
                  <i className="far fa-futbol" />
                </span>{' '}
                <a
                  className="has-text-white"
                  href="mailto:mtjulietsoccerclub@gmail.com"
                  target="_top"
                >
                  mtjulietsoccerclub@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
