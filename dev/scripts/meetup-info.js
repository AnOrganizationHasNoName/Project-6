import React from 'react';
import { Link } from 'react-router-dom';

export default class Meetups extends React.Component {
  constructor() {
    super(); 
  }
  render() {
    return (
      <div>
        <button><Link to="/">Return To Home</Link></button>
        <ul className="meetups">
          {this.props.data.map(meetup => {
            return <li className="meetup" key={meetup.id}>
              <h2>{meetup.name}</h2>
              <p>{meetup.venue.name}, {meetup.venue.address_1}</p>
              <p>Meetup Time: {getTime(meetup.time)}</p>
              <p>Meetup Date: {getDate(meetup.time)}</p>
              <p>Event URL: <a href={meetup.event_url}>{meetup.event_url}</a></p>
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

const getTime = (millsecondsTime) => new Date(millsecondsTime).toTimeString().slice(0,5);
const getDate = (millsecondsTime) => new Date(millsecondsTime).toLocaleDateString();
