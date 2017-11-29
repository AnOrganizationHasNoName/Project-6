import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Qs from 'qs';
// import LandingPage from './landing-page'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      meetups: [],
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
        reqUrl: 'https://api.meetup.com/2/open_events',
        params: {
          key: '6a49717012332a5d284f3c775460653',
          city: 'Toronto',
          country: 'Canada',
          text: 'tech'
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
      // res.data.results.map((meetup, i)=>{
      //   console.log(`${meetup.venue}${i}`);
      // })
    });
  }
  render() {
    return (
      <div>
        {/* <LandingPage /> */}
        {this.state.meetups.map((meetup, i)=>{
          return <MeetupInfo key={`meetup-${i}`} data={meetup}/>
        })}
      </div>
    )
  }
}
class MeetupInfo extends React.Component {
  constructor() {
    super();
  }
  render() {
    return(
      <div>
        <h2>{this.props.data.name}</h2>
        <ul>
          <li>
            <p>Venue: {this.props.data.venue.name}</p>
            <p>Address: {this.props.data.venue.address_1}</p>
          </li>
        </ul>
        <button>
          <a href={this.props.data.event_url}>More Info</a>
        </button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));