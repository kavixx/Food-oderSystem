import React, { Component } from 'react';
import '../style.css';

export default class Event extends Component {
    render() {
        return (
            <section id="events" className="events">
        <div className="container">
          <div className="section-title">
            <h2>Organize Your <span>Events</span> with our delicious</h2>
          </div>
          <div className="owl-carousel events-carousel">
            <div className="row event-item">
              <div className="col-lg-6">
                <img src="assets/images/event-birthday.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 content">
                <h3>Birthday Parties</h3>
                <div className="price">
                  <p><span /></p>
                </div>
                <p className="font-italic">
                  our special party packages or theme ideas to select the party that best matches your little girl or boy. You also have the option of choosing party extras from delectable and amazing party cakes to kid’s entertainment with in-house camera crew.
                </p>
                <ul>
                  <li><i className="icofont-check-circled" /> Food for 30 pax – Choice of 6 Party Foods.</li>
                  <li><i className="icofont-check-circled" /> Fruit Juice or Iced Coffee for 40 pax.</li>
                  <li><i className="icofont-check-circled" /> Water for 40 pax.</li>
                </ul>
                <p>
                  our special party packages or theme ideas to select the party that best matches your little girl or boy. You also have the option of choosing party extras from delectable and amazing party cakes to kid’s entertainment with in-house camera crew.
                </p>
              </div>
            </div>
            <div className="row event-item">
              <div className="col-lg-6">
                <img src="assets/images/event-private.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 content">
                <h3>Private Parties</h3>
                <div className="price">
                  <p><span /></p>
                </div>
                <p className="font-italic">
                  our special party packages or theme ideas to select the party that best matches your little girl or boy. You also have the option of choosing party extras from delectable and amazing party cakes to kid’s entertainment with in-house camera crew.
                </p>
                <ul>
                  <li><i className="icofont-check-circled" /> Food for 25 pax – Choice of 6 party foods.</li>
                  <li><i className="icofont-check-circled" /> Fruit juice for 35 pax.</li>
                  <li><i className="icofont-check-circled" /> Water for 35 pax.</li>
                </ul>
                <p>
                  our special party packages or theme ideas to select the party that best matches your little girl or boy. You also have the option of choosing party extras from delectable and amazing party cakes to kid’s entertainment with in-house camera crew.
                </p>
              </div>
            </div>
            <div className="row event-item">
              <div className="col-lg-6">
                <img src="assets/images/event-custom.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 content">
                <h3>Custom Parties</h3>
                <div className="price">
                  <p><span /></p>
                </div>
                <p className="font-italic">
                  our special party packages or theme ideas to select the party that best matches your little girl or boy. You also have the option of choosing party extras from delectable and amazing party cakes to kid’s entertainment with in-house camera crew.
                </p>
                <ul>
                  <li><i className="icofont-check-circled" /> Food for 35 pax – Choice of 8 party foods.</li>
                  <li><i className="icofont-check-circled" /> Fruit juice or iced coffee or chocolate milk for 45 pax.</li>
                  <li><i className="icofont-check-circled" /> Water for 45 pax.</li>
                </ul>
                <p>
                  our special party packages or theme ideas to select the party that best matches your little girl or boy. You also have the option of choosing party extras from delectable and amazing party cakes to kid’s entertainment with in-house camera crew.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
        )
    }
}
