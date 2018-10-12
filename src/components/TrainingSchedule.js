import React, { Component } from 'react';
import scheduleGraphic from '../assets/graphics/scheduleLabel.jpg';
import '../css/trainingschedule.css';

export default class TrainingSchedule extends Component {
  maplocation = 'https://goo.gl/maps/74LSa1yht7p';

  render() {
    return (
      <div className="backgroundAttach">
        <div>
          <section className="scheduleContainer">
            <img className="scheduleImage" src={scheduleGraphic} alt="" />
          </section>
          <section className="pictureBox">
            <div className="tile is-ancestor">
              <div className="tile is-4 is-vertical is-parent">
                <div className="tile is-child box">
                  <p className="title">Training Sessions</p>
                  <p>
                    Group training sessions are held on saturday mornings, at the Charlie Daniels
                    Park in Mount Juliet. We welcome players from ages 3-18, who will be arranged by
                    age group. Training takes place in forty-minute time slots from 9 AM until 12:40
                    PM. Individual training sessions take place from 12:40PM onwards, on a scheduled
                    basis.
                  </p>
                </div>
                <div className="tile is-child box">
                  <p className="title">Registration & Rates</p>
                  <p>
                    Registration is a one-time fee of $35, and includes a free MJSC shirt. Please
                    call <a href="tel:1-613-603-0785">613-603-0785</a> or email{' '}
                    <a
                      href="mailto:mtjulietsoccerclub@gmail.com?Subject=MJSC%20Registration%20and%20Information"
                      target="_top"
                    >
                      mtjulietsoccerclub@gmail.com
                    </a>{' '}
                    for registration and more information.
                  </p>
                </div>
              </div>
              <div className="tile is-parent">
                <div className="tile is-child box">
                  <p className="title">Three</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at
                    erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam,
                    consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula
                    eleifend, nunc dui porta orci, quis semper odio felis ut quam.
                  </p>
                  <p>
                    Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a
                    sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor
                    lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi,
                    fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus
                    dignissim turpis. Sed eget varius ligula, at volutpat tortor.
                  </p>
                  <p>
                    Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae
                    congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque
                    sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet
                    lacus, quis faucibus libero. Quisque non semper leo.
                  </p>
                </div>
              </div>
            </div>
            <section className="is-radiusless">
              <div className="content has-text-centered">
                <h1 className="is-size-2 is-size-3-mobile">Training Sessions</h1>
                <p className="is-size-5 is-size-6-mobile secondaryFont">
                  Group training sessions are held on saturday mornings, at the Charlie Daniels Park
                  in Mount Juliet. We welcome players from ages 3-18, who will be arranged by age
                  group. Training takes place in forty-minute time slots from 9 AM until 12:40 PM,
                  as seen in the below table.
                </p>
                <p className="is-size-5 is-size-6-mobile secondaryFont">
                  Individual training sessions take place from 12:40PM onwards, on a scheduled
                  basis.
                </p>
              </div>
              <div className="content has-text-centered">
                <h3 className="is-size-3 is-size-4-mobile">Registration and Rates</h3>
                <p className="is-size-5 is-size-6-mobile secondaryFont">
                  Registration is a one-time fee of $35, and includes a free MJSC shirt. Please call{' '}
                  <a href="tel:1-613-603-0785">613-603-0785</a> or email{' '}
                  <a
                    href="mailto:mtjulietsoccerclub@gmail.com?Subject=MJSC%20Registration%20and%20Information"
                    target="_top"
                  >
                    mtjulietsoccerclub@gmail.com
                  </a>{' '}
                  for registration and more information.
                </p>
                <p className="is-size-5 is-size-6-mobile secondaryFont">
                  Group sessions: $100 / five 40 minute sessions
                </p>
                <p className="is-size-5 is-size-6-mobile secondaryFont">
                  Individual sessions: $200 / five 60 minute sessions
                </p>
                <p className="is-size-5 is-size-6-mobile secondaryFont">
                  All lessons must be paid for in advance.
                </p>
              </div>
            </section>

            <section className="content">
              <div className="registration">
                <h1 className=" has-text-centered is-size-3 is-size-3-mobile">
                  Group Training Schedule
                </h1>
                <a
                  className="button is-large"
                  href="mailto:mtjulietsoccerclub@gmail.com?Subject=MJSC%20Group%20Coaching%20Registration"
                  target="_top"
                >
                  Register for group coaching
                </a>
              </div>
              <table className="table is-striped is-hoverable is-fullwidth">
                <thead className="has-background-grey-lighter">
                  <tr>
                    <th>Age</th>
                    <th>Location</th>
                    <th>Time</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody className="has-text-centered">
                  <tr>
                    <th>3-4 years</th>
                    <td>
                      <a href={this.maplocation} target="blank">
                        Charlie Daniels Park, Mt. Juliet
                      </a>
                    </td>
                    <td>Saturdays, 9:00am - 9:40am</td>
                    <td>$100 / five sessions</td>
                  </tr>
                  <tr>
                    <th>5-8 years</th>
                    <td>
                      <a href={this.maplocation} target="blank">
                        Charlie Daniels Park, Mt. Juliet
                      </a>
                    </td>
                    <td>Saturdays, 9:45am - 10:25am</td>
                    <td>$100 / five sessions</td>
                  </tr>
                  <tr>
                    <th>9-12 years</th>
                    <td>
                      <a href={this.maplocation} target="blank">
                        Charlie Daniels Park, Mt. Juliet
                      </a>
                    </td>
                    <td>Saturdays, 10:30am - 11:10am</td>
                    <td>$100 / five sessions</td>
                  </tr>
                  <tr>
                    <th>13-15 years</th>
                    <td>
                      <a href={this.maplocation} target="blank">
                        Charlie Daniels Park, Mt. Juliet
                      </a>
                    </td>
                    <td>Saturdays, 11:15am - 11:55am</td>
                    <td>$100 / five sessions</td>
                  </tr>
                  <tr>
                    <th>16-18 years</th>
                    <td>
                      <a href={this.maplocation} target="blank">
                        Charlie Daniels Park, Mt. Juliet
                      </a>
                    </td>
                    <td>Saturdays, 12:00pm - 12:40pm</td>
                    <td>$100 / five sessions</td>
                  </tr>
                </tbody>
              </table>
            </section>
            <section className="content">
              <div className="registration">
                <h1 className=" has-text-centered is-size-3 is-size-3-mobile">
                  Individual Training Schedule
                </h1>
                <a
                  className="button is-large"
                  href="mailto:mtjulietsoccerclub@gmail.com?Subject=MJSC%20Individual%20Coaching%20Registration"
                  target="_top"
                >
                  Register for individual coaching
                </a>
              </div>
            </section>
            <section>
              <table className="table is-striped is-hoverable is-fullwidth">
                <thead className="has-background-grey-lighter">
                  <tr>
                    <th>Age</th>
                    <th>Location</th>
                    <th>Time</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody className="">
                  <tr>
                    <th>8 years and older</th>
                    <td>
                      <a href={this.maplocation} target="blank">
                        Charlie Daniels Park, Mt. Juliet
                      </a>
                    </td>
                    <td>Saturdays 12:45pm unless scheduled otherwise </td>
                    <td>$200 / five sessions</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </section>
        </div>
      </div>
    );
  }
}
