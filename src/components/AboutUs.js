import React, { Component } from 'react';
import '../css/about.css';

import mjscLogo from '../assets/graphics/mjscLogo.png';
// import jamesPicken from '../assets/graphics/jamespicken.png';

export default class AboutUs extends Component {
  render() {
    return (
      <div className="masterBackgroundAbout">
        <div className="aboutUsOverlayControl">
          <img src={mjscLogo} className="homeLogoControl" alt="" />
          <div className="content has-text-white">
            <h3 className="has-text-white is-size-4">
              It’s no secret the sport of soccer is growing in Middle Tennessee.
            </h3>
            <p>
              With the recent announcement of a professional soccer club potentially coming to
              Nashville, as well as the record-breaking attendance Nashville saw when it held a
              European professional game, it seems Middle Tennesseans are more interested in the
              sport than previously thought. Now, Mt. Juliet will be getting a soccer club coached
              by an award-winning soccer coach from England.
            </p>
            <p>
              Scottish-born James Picken followed his son, Daniel, to Wilson County from England
              when Daniel signed to play for the soccer team at Cumberland University. Picken had
              coached his son ever since Daniel first started playing soccer at 6 years old. Now he
              wants to use his experience as a coach to benefit and grow the local soccer community.{' '}
              <span className="is-italic">
                “I’ve always wanted to develop players and play the right way,”
              </span>{' '}
              said Picken.{' '}
              <span className="is-italic">
                “We want to teach them how to play positions, how to pass the ball, how to defend
                and give them a broader outlook than everyone chases a ball.”
              </span>{' '}
            </p>
            <p>
              In England, Picken coached two youth teams to their league championships, the Rebel
              Wanderers and the Ladybridge Lions. The Wanderers won their league, and the Lions
              finished runner-up. Picken himself won coach of the year in 2011-2012 for leading the
              Lions to the championship game.
            </p>
            <h3 className="has-text-white is-size-4">
              With Mt. Juliet Soccer Club, Picken wants to start with children 3-5 years old and
              teach them the fundamentals first, and foremost.
            </h3>
            <p>
              Eventually, he plans to work with older players, as well.{' '}
              <span className="is-italic">“I think they can retain it,”</span> said Picken.{' '}
              <span className="is-italic">
                “They’ll remember as a little kid, you know you remember stuff from when you were a
                kid, so if we get them into the positions, we can go forward.”
              </span>{' '}
              According to Picken, he would eventually like to get a league for children going in
              Mt. Juliet on Saturdays. He said if there isn’t already a league, he may try to start
              one.{' '}
              <span className="is-italic">
                “I would like indoor and outdoor facilities in Mt. Juliet and incorporate Lebanon
                and the local area, but that’s looking toward the future,”
              </span>{' '}
              said Picken.{' '}
              <span className="is-italic">
                “I’d like local players to go play for the United States and to Europe and play in
                Europe, because I’ve got the experience. I know what it’s like.”
              </span>{' '}
              The club won’t have tryouts, rather they will do free trials for young children to see
              how they like it.
            </p>
            <h3 className="has-text-white is-size-4">
              <span className="is-italic">
                “People sign up for these things and the kids don’t like it,"{' '}
              </span>said Picken.{' '}
              <span className="is-italic">
                “We want to really make it enthusiastic and enjoyable for them."
              </span>
            </h3>
            <p>
              "It also lets me know what to adapt, because I need to adapt a little bit to the
              American children, because I’ve never coached them.” The free trials begin Saturday at
              4 p.m. at Charlie Daniels Park in Mt. Juliet and will continue at the same time every
              week until Christmas. Picken emphasized even in the trial sessions, he will teach the
              children the fundamentals of the sport.
            </p>
            <p>
              <span className="is-italic">
                “When people are playing soccer sometimes, they’re coached just to kick the ball
                away,”
              </span>{' '}
              said Picken.{' '}
              <span className="is-italic">
                “We would not coach that. We keep possession of the ball. It’s like playing
                basketball and throwing it to the opposition. What would happen? Would you win any
                games?”
              </span>
            </p>
            <h3 className="has-text-white is-size-4">
              For more information on the Mt. Juliet Soccer Club or the free trials at Charlie
              Daniels Park in Mt. Juliet, call James Picken at 615-603-0785.
            </h3>
            {/* <img src={jamesPicken} className="pickenPortrait" alt="" /> */}
          </div>
        </div>
      </div>
    );
  }
}
