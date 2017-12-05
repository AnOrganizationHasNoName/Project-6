import React from 'react';
import { Link } from 'react-router-dom';

export default class Meetups extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <button className="homeBtn">
          <Link to="/" onClick={this.props.reset}>Return To Home</Link>
        </button>
        <ul className="meetupCont clearfix">
          {this.props.data.map(meetup => {
            return <li className="meetup clearfix" key={meetup.id}>
              <div className="meetupHeader">
              <h2>{meetup.name}</h2>
              </div>
              <div className="meetupInfoCont">
                <span>Venue: </span><p>{meetup.venue.name}, {meetup.venue.address_1}</p>
                <span>Meetup Time: </span><p>{getTime(meetup.time)}</p>
                <span>Meetup Date: </span><p>{getDate(meetup.time)}</p>
              </div>
              <button><a href={meetup.event_url}>Event Info</a></button>
              <button
                onClick={() => this.props.onClick(meetup.venue.lat, meetup.venue.lon)}>
                <Link to="/restaurants">Find Restaurants</Link>
              </button>
            </li>
          })}
        </ul>
      </div>
    )
  }
}

// conversion from ms to readable time and date
const getTime = (millsecondsTime) => new Date(millsecondsTime).toTimeString().slice(0, 5);
const getDate = (millsecondsTime) => new Date(millsecondsTime).toLocaleDateString();