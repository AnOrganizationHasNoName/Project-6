import React from 'react';
import { Link } from 'react-router-dom';

export default class Meetups extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <button><Link to="/" onClick={this.props.reset}>Return To Home</Link></button>
        <ul className="meetups clearfix">
          {this.props.data.map(meetup => {
            return <li className="meetup clearfix" key={meetup.id}>
              <h2>{meetup.name}</h2>
              <p>{meetup.venue.name}, {meetup.venue.address_1}</p>
              <p><span>Meetup Time: </span>{getTime(meetup.time)}</p>
              <p><span>Meetup Date: </span>{getDate(meetup.time)}</p>
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