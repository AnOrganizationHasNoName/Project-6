import React from 'react';

export default class MeetupInfo extends React.Component {
  constructor() {
    super();
  }
  render() {
    return(
      <div>
        <h2><a href="" onClick={this.getRes}>{this.props.data.name}</a></h2>
        <ul>
          <li><p>Venue: {this.props.data.venue.name}</p></li>
          <li><p>Address: {this.props.data.venue.address_1}</p></li>
          <li>
            <p>Event URL: <a href={this.props.data.event_url}>{this.props.data.event_url}</a></p>
          </li>
          <li>
            <p>Meetup Time: {getTime(this.props.data.time)}</p>
          </li>
          <li>
            <p>Meetup Date: {getDate(this.props.data.time)}</p>
          </li>
        </ul>
      </div>
    )
  }
}

const getTime = (millsecondsTime) => new Date(millsecondsTime).toTimeString();
const getDate = (millsecondsTime) => new Date(millsecondsTime).toLocaleDateString();