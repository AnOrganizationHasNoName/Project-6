import React from 'react';

export default class Meetups extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('test');
    this.props.onClick(this.props.data.venue.lat, this.props.data.venue.lon);
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
                <button onClick={this.handleClick}>Find Restaurants</button>
            </li>
          })}
        </ul>

        // <ul className="meetup">
        //   <li><h2>{this.props.data.name}</h2></li>
        //   <li>
        //     <p>{this.props.data.venue.name}, {this.props.data.venue.address_1}</p>
        //   </li>
        //   <li>
        //     <p>Meetup Time: {getTime(this.props.data.time)}</p>
        //   </li>
        //   <li>
        //     <p>Meetup Date: {getDate(this.props.data.time)}</p>
        //   </li>
        //   <li>
        //   <li>
        //     <p>Event URL: <a href={this.props.data.event_url}>{this.props.data.event_url}</a></p>
        //   </li>
        //     <button onClick={this.handleClick}>Find Restaurants</button>
        //   </li>
        // </ul>
    )
  }
}

const getTime = (millsecondsTime) => new Date(millsecondsTime).toTimeString();
const getDate = (millsecondsTime) => new Date(millsecondsTime).toLocaleDateString();
