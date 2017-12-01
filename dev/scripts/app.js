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
    this.getMeetups = this.getMeetups.bind(this);
    this.getRestaurantRefs = this.getRestaurantRefs.bind(this);
    this.getRestaurantDetails = this.getRestaurantDetails.bind(this);
    this.handleClick = this.getMeetups.bind(this);
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
  getRestaurantRefs(lat, lon) {
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
    }).then(res => {
      const restaurantRefs = res.data.results.map(restaurant => restaurant.reference);
      // console.log(restaurantRefs);
      this.getRestaurantDetails(restaurantRefs);
      this.setState({
        showMeetup: false
      })
      { this.state.showMeetup ? <Meetups /> : <Restaurants data={this.state.restaurants} /> }
    });

  }
  getRestaurantDetails(restaurantRefs) {
    // this method will be called in the getRestaurantRefs function where the restaurantRefs information lives
    // therefore, make a placeholder for now
    // for each of the restaurant ids run an axios request
    // store each of these ajax requests in an array
    // use promise.all on this array of ajax requests 
    this.setState({
      showInput: false
    })
    const restaurantDetails = restaurantRefs.map(restaurantRef => {
      return axios({
        method: 'GET',
        url: 'http://proxy.hackeryou.com',
        dataResponse: 'json',
        paramsSerializer: function (params) {
          return Qs.stringify(params, { arrayFormat: 'brackets' })
        },
        params: {
          reqUrl: `https://maps.googleapis.com/maps/api/place/details/json`,
          params: {
            key: 'AIzaSyCpT2X1_HiFf3PJxmbYeIPpSIHGrdUTnmM',
            reference: restaurantRef
          },
          xmlToJSON: false
        }
      });
    })
    Promise.all(restaurantDetails).then(res => {
      const restaurants = res.map((res) => {
        return res.data.result;
      })
      console.log(restaurants);
<<<<<<< HEAD
=======

>>>>>>> c059da39882359a877086d2206061e55bfe84e63
      this.setState({
        restaurants
      })
    })
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
    }).then(res => {
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
        {this.state.showInput ? <LandingPage formSubmit={this.getMeetups} displayState={this.state.showINput} /> : <Meetups data={this.state.meetups} onClick={this.getRestaurants} />}
        {/*         <LandingPage formSubmit={this.getMeetups} />
        <Meetups data={this.state.meetups} onClick={this.getRestaurantRefs} />
        <Restaurants data={this.state.restaurants} /> */}
      </div>
<<<<<<< HEAD
=======

>>>>>>> c059da39882359a877086d2206061e55bfe84e63
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'));

