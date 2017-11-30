import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Qs from 'qs';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MeetupInfo from './meetup-info';
import LandingPage from './landing-page';
import Restaurant from './restaurants';

class App extends React.Component {
  constructor() {
    super();
    this.getMeetups = this.getMeetups.bind(this);
    this.getRestaurants = this.getRestaurants.bind(this);
    this.handleClick = this.getMeetups.bind(this);
    this.state = {
      meetups: [],
      restaurants: [],
    }
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
        restaurants
      });
    });
  }
  getMeetups(city, country, category) {
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
      this.setState({
        meetups
      })
    });
  }
  render() {
    return (
      <div className="wrapper">
        <LandingPage formSubmit={this.getMeetups} />
        {this.state.meetups.map((meetup, i) => {
          return <MeetupInfo key={`meetup-${i}`} data={meetup}onClick={this.getRestaurants}/>
        })}
        {this.state.restaurants.map((restaurant)=>{
          return <Restaurant data={restaurant} key={restaurant.id}/>
        })}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));