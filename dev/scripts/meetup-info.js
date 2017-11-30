import React from 'react';

export default class Meetups extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('test');
    // this.props.onClick(meetup.venue.lat, meetup.venue.lon);
  }
  render() {
    return (
        <ul className="meetups">
          {this.props.data.map(meetup =>{
            return <li className="meetup" key={meetup.id}>
                <h2>{meetup.name}</h2>
                <p>{meetup.venue.name}</p>
                <p>Meetup Time: {getTime(meetup.time)}</p>
                <p>Meetup Date: {getDate(meetup.time)}</p>
                <p>Event URL: <a href={meetup.event_url}>{meetup.event_url}</a></p>
                <button
                  onClick={this.handleClick}>
                  Find Restaurants
                </button>
            </li>
          })}
        </ul>
    )
  }
}

const getTime = (millsecondsTime) => new Date(millsecondsTime).toTimeString();
const getDate = (millsecondsTime) => new Date(millsecondsTime).toLocaleDateString();
