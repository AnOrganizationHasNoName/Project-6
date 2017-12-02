import React from 'react';
export default class Meetups extends React.Component {
  constructor() {
    super();
    
  }
  render() {
    return (
    this.state={
      showMeetup: true
    }
  ) 
  }
  render() {
    return (
        <div>
          <ul className="meetups">
            {this.props.data.map(meetup =>{
              return <li className="meetup" key={meetup.id}>
                  <h2>{meetup.name}</h2>
                  <p>{meetup.venue.name}</p>
                  <p>Meetup Time: {getTime(meetup.time)}</p>
                  <p>Meetup Date: {getDate(meetup.time)}</p>
                  <p>Event URL: <a href={meetup.event_url}>{meetup.event_url}</a></p>
                <button onClick={() => { this.props.onClick(meetup.venue.lat, meetup.venue.lon) }}>Find Restaurants</button>
              </li>
            })}
          </ul>

          <ul className="meetups">
            {this.props.data.map(meetup => {
              return ( <li className="meetup" key={meetup.id}>
                <h2>{meetup.name}</h2>
                <p>{meetup.venue.name}, {meetup.venue.address_1}</p>
                <p>Meetup Time: {getTime(meetup.time)}</p>
                <p>Meetup Date: {getDate(meetup.time)}</p>
                <p>Event URL: <a href={meetup.event_url}>{meetup.event_url}</a></p>
                <button onClick={() => { this.props.onClick(meetup.venue.lat, meetup.venue.lon) }}>Find Restaurants</button>
              </li>
              )
            })}
            </ul>
          </div>
    )
  }
}

const getTime = (millsecondsTime) => new Date(millsecondsTime).toTimeString().slice(0,5);
const getDate = (millsecondsTime) => new Date(millsecondsTime).toLocaleDateString();
