import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Qs from 'qs';
import Meetups from './meetup-info';
import LandingPage from './landing-page';
import Restaurants from './restaurants';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      meetups: [],
      restaurants: [],
      showInput: true,
      showMeetup: true
    }
    this.getMeetups = this.getMeetups.bind(this);
    this.getRestaurants = this.getRestaurants.bind(this);
    this.handleClick = this.getMeetups.bind(this);
  }
  getRestaurants(lat, lon) {
    axios({
      method: 'GET',
      url: 'http://proxy.hackeryou.com',
      dataResponse: 'json',
      paramsSerializer: function (params) {
        return Qs.stringify(params, { arrayFormat: 'brackets' })
      },
      params: {
        reqUrl: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
        params: {
          key: 'AIzaSyCpT2X1_HiFf3PJxmbYeIPpSIHGrdUTnmM',
          type: 'restaurant',
          location: '43.667252, -79.733551',
          location: `${lat}, ${lon}`,
          radius: 1000,
        },
        proxyHeaders: {
          'header_params': 'value'
        },
        xmlToJSON: false
      }
    }).then((res) => {
      const restaurants = res.data.results;
      this.setState({
        restaurants,
        showMeetup: false
      });
      { this.state.showMeetup ? <Meetups  data={this.state.meetups} onClick={this.getRestaurants}/> : <Restaurants data={this.state.restaurants}/>}
    });
  }
  getMeetups(city, country, category) {
    this.setState({
      showInput: false
    })
    axios({
      method: 'GET',
      url: 'http://proxy.hackeryou.com',
      dataResponse: 'json',
      paramsSerializer: function (params) {
        return Qs.stringify(params, { arrayFormat: 'brackets' })
      },
      params: {
        reqUrl: 'https://api.meetup.com/2/open_events',
        params: {
          key: '6a49717012332a5d284f3c775460653',
          city: city,
          country: country,
          category: category,
        },
        proxyHeaders: {
          'header_params': 'value'
        },
        xmlToJSON: false
      }
    }).then((res) => {
      const meetups = res.data.results.filter(meetup => meetup.venue !== undefined);
      console.log(this)
      this.setState({
        meetups,

      })
    });
  }
  render() {
    return (
      <div className="wrapper">
       { this.state.showInput ? <LandingPage formSubmit={this.getMeetups} displayState={this.state.showINput} /> : <Meetups data={this.state.meetups} onClick={this.getRestaurants}/>}
               
  {/*           <Restaurants data={this.state.restaurants}/>   */}
      </div>
      
    )

  }
}

ReactDOM.render(<App />, document.getElementById('app'));

// data={this.state.meetups} lat={this.state.meetups.venue.lat} lon = { this.state.meetups.venue.lon }
