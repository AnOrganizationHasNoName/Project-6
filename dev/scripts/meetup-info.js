import React from 'react';


// meetup group selection input
// html to take input and button 
//   wrap ul in button 

//     method to take user input(handleSubmit for onClick)
//this.state = {
//   meetup-selection: ""
// }

//groupLon = this.res.group.group_lon
// groupLat = this.res.group.group_lat


// }

//when user clicks on the group, group will stored in userMeetup, from the userMeetup object, we can get the lat and lon 

//   When the user clicks on the meetup event, send the request to Google Places API(longitude / latitude)

//handleChange(e){

export default class MeetupInfo extends React.Component {
  constructor() {
    super();

    this.state = {
      userMeetup: {}
    }
    this.handleClick = this.handleClick.bind(this);
  }
handleClick(){
  this.props.places(this.props.data.venue.lon, this.props.data.venue.lat);
  console.log("hello")
}
  //method to take user selected meetup group and put in empty object



  render() {
    return (

      <div>
        <h2>
          <a onClick={this.handleClick} >
            {this.props.data.name}
          </a>
        </h2>
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



// make longitude and latitude states in the constructor, and pass the same states to a method
// userLon : '' (add this state to the constructor)
// in the new method that yu ake to send the axios request, add the this.setState with the same state (userlon)
