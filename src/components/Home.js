import React, { Component } from 'react';
import '../css/home.css';

import mjscLogo from '../assets/graphics/mjscLogo.png';
import facebookLogo from '../assets/graphics/facebook.jpg';
import twitterLogo from '../assets/graphics/twitter-logo.png';
import instagramLogo from '../assets/graphics/new-instagram-text-logo.png';

export default class Home extends Component {
  render() {
    return (
      <div>
        <section className="hero is-fullheight has-text-white">
          <div className="hero-body is-paddingless">
            <div className="overlayControl">
              <img src={mjscLogo} className="homeLogoControl" alt="" />
              <div className="titleMargin">
                <p className="is-size-3-mobile is-size-2-tablet is-size-1-desktop has-text-white semiBoldFont titleControl">
                  The USA's Premier Private Soccer Training
                </p>
                <p className="is-size-4-mobile is-size-4-tablet is-size-3-desktop semiBoldFont">
                  Improve your skills while learning to play the game the right way!
                </p>
              </div>
              <div className="content">
                <p className="is-size-5-mobile is-size-4-tablet secondaryFont">
                  Mount Juliet Soccer Club provides soccer training clinics for groups and
                  individuals of all age groups. With hands on training from one of Scotland's top
                  coaches, players learn:
                </p>
              </div>
              <div className="content has-text-left-mobile is-hidden-tablet">
                <ul className="bulletPoints">
                  <li>Proper position strategy and technique</li>
                  <li>Dribbling and shooting</li>
                  <li>Decision making</li>
                  <li>Team work and communication</li>
                </ul>
              </div>
              <div className="content is-hidden-mobile">
                <p className="is-size-5-tablet bulletList">
                  Proper position strategy and technique{' '}
                  <span className="has-text-grey-light">
                    {' '}
                    <i class="far fa-futbol"> </i>
                  </span>{' '}
                  Dribbling and shooting
                </p>
                <p className="is-size-5-tablet bulletList">
                  {' '}
                  Decision making{' '}
                  <span className="has-text-grey-light">
                    {' '}
                    <i class="far fa-futbol" />
                  </span>{' '}
                  Team work and communication
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="box has-text-centered">
            <h1 className="is-size-2">Where to Find Us</h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3218.6974507224736!2d-86.51258118419163!3d36.22254808007165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88643e1a59551c1f%3A0x7b4a1a5c02845f9c!2sCharlie+Daniels+Park!5e0!3m2!1sen!2sus!4v1519852794780"
              title="Charlie Daniels Park"
              className="googleMapEmbed"
            />
            <p className="is-size-6-mobile secondaryFont">
              The MJSC Fields are located just east of Mt. Juliet Road, Mount Juliet, TN. Different
              locations can be arranged for private training sessions.
            </p>
            <hr />
            <p className="is-size-4-mobile">MJSC is on:</p>
            <a href="https://www.facebook.com/mtjulietsoccerclub/" target="blank">
              <img src={facebookLogo} className="socialIcons" alt="facebook logo" />
            </a>
            <p className="is-size-6-mobile secondaryFont">
              Join the MJSC Facebook group page and stay up to date on announcements, registration
              dates, and news. New happenings can be found on our facebook, under the events tab!
            </p>
            <a href="https://twitter.com/mtjulietsoccerc" target="blank">
              <img src={twitterLogo} className="socialIcons" alt="twitter logo" />
            </a>
            <p className="is-size-6-mobile secondaryFont">
              Follow us on Twitter for the latest updates.
            </p>
            <a href="https://www.instagram.com/mountjulietsoccerclub/" target="blank">
              <img src={instagramLogo} className="socialIcons" alt="instagram logo" />
            </a>

            <p className="is-size-6-mobile secondaryFont">
              Finally, be sure to follow us on Instagram for great action shots!
            </p>
          </div>
        </section>
      </div>
    );
  }
}
