import React from 'react';


// meetup group selection input
// html to take input and button 
  //   wrap ul in button 

//     method to take user input(handleSubmit for onClick)
  //this.state = {
  //   meetup-selection: ""
  // }
    //handleSubmit(e){
    //   e.preventdefault();
    //   console.log("I am the handleChange")
    //     this.setState{
    //       meetup-selection = this.state.meetup-selection
    //     }

    // }

//   When the user clicks on the meetup event, send the request to Google Places API(longitude / latitude)

//handleChange(e){



export default class MeetupInfo extends React.Component {
  constructor() {
    super();
  }
  render() {
    return(
      <div>
        <h2>{this.props.data.name}</h2>
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
