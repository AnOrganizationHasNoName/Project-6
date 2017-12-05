import React from 'react';
import { Link } from 'react-router-dom';

export default class Meetups extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className= "wrapper">
        <button className="homebutton"><Link to="/">Return To Home</Link></button>
        <ul className="meetups clearfix">
          {this.props.data.map(meetup => {
            return <li className="meetup clearfix" key={meetup.id}>
              <section className="meetupHead">
                <div className="meetupMainTitle">
                  <h2>{meetup.name}</h2>
                </div>
              </section>

              <section className="meetupInfo clearfix">
                <div className="meetupTags clearfix">
                  <div className="meetupTagsTitle clearfix">
                    <h3>Venue: </h3>
                    <p>{meetup.venue.name}</p>
                  </div>
                  <div className="meetupTagsTitle clearfix">
                    <h3>Address: </h3>
                    <p>{meetup.venue.address_1}</p>
                  </div>
                  <div className="meetupTagsTitle clearfix">
                    <h3>Time</h3>
                    <p>{getTime(meetup.time)}</p>
                  </div>
                  <div className="meetupTagsTitle clearfix">
                    <h3>Date: </h3>
                    <p>{getDate(meetup.time)}</p>
                  </div>
                </div>

                <div className="meetupLinks">
                  <div className="meetupURL">
                    <button><a href={meetup.event_url}>Event Info</a></button>
                  </div>
                  <div className="findResLink">
                    <button className="meetupButton"
                      onClick={() => this.props.onClick(meetup.venue.lat, meetup.venue.lon)}>
                      <Link to="/restaurants">Find Restaurants</Link>
                    </button>
                  </div>
                </div>
              </section>
              {/*               <p>{meetup.venue.name}, {meetup.venue.address_1}</p>
              <p>Meetup Time: {getTime(meetup.time)}</p>
              <p>Meetup Date: {getDate(meetup.time)}</p>
              <p>Event URL: <a href={meetup.event_url}>More Info Here</a></p>
              <button
                onClick={() => this.props.onClick(meetup.venue.lat, meetup.venue.lon)}>
                <Link to="/restaurants">Find Restaurants</Link>
              </button> */}
            </li>
          })}
        </ul>
      </div>
    )
  }
}

const getTime = (millsecondsTime) => new Date(millsecondsTime).toTimeString().slice(0, 5);
const getDate = (millsecondsTime) => new Date(millsecondsTime).toLocaleDateString();
