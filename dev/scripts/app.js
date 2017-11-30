import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Qs from 'qs';
import MeetupInfo from './meetup-info';
import LandingPage from './landing-page';
import Restaurant from './restaurants';
import ResResults from "./res-results";
import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    this.getMeetups = this.getMeetups.bind(this);
    this.handleClick = this.getMeetups.bind(this);
    this.state = {
      meetups: [],
      restaurants: [],
    }
  }
  componentDidMount() {
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
          // location: `${latitude}, ${longitude}`,
          radius: 1000,
        },
        proxyHeaders: {
          'header_params': 'value'
        },
        xmlToJSON: false
      }
    }).then((res) => {
      const restaurants = res.data.results;
      console.log(restaurants);
      this.setState({
        restaurants
      })
    });
  }
  handleClick() {
    // getRestaurants(this.props.lat, this.props.lon);
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
    <Router >
      <div className="searchMeetups">
          <LandingPage formSubmit={this.getMeetups} />
          {this.state.meetups.map((meetup, i) => {
            return <MeetupInfo key={`meetup-${i}`} data={meetup} lat={meetup.venue.lat} lon={meetup.venue.lon} onClick={this.handleClick} />
          })}
          {this.state.restaurants.map((restaurant) => {
            return <Restaurant data={restaurant} key={restaurant.id} />
          })}
              <Route exact path="/" component={LandingPage} />
              <Route path="/meetups" component={MeetupInfo} />
          <Route path="/meetup-restaurants" component={ResResults} />
        </div>

      </Router>
    )

  }
}

ReactDOM.render(<App />, document.getElementById('app'));
