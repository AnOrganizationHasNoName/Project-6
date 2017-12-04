import React from "react";
import axios from "axios";
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { Link, withRouter } from 'react-router-dom';
import CountriesArray from './country-array';
import Qs from 'qs';
import TitleOnLandingPage from './landing-page-header';
import LandingPageFooter from './landing-page-footer';

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryInput: 1,
            meetupCategories: [],
            lat: 0,
            lon: 0,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            loading: true
        })
        this.props.formSubmit(this.state.lat, this.state.lon, this.state.categoryInput);
        this.props.history.push('/meetups');
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    componentDidMount() {
        // initializing google autocomplete 
        var defaultBounds = new google.maps.LatLngBounds(
            new google.maps.LatLng(-90, -180),
            new google.maps.LatLng(90, 180));

        var input = document.getElementById('searchTextField');
        var options = {
            bounds: defaultBounds,
            types: ['(cities)'],
        };
        var autocomplete = new google.maps.places.Autocomplete(input, options);

        // when the user changes the place selected, an object 'place' is created and from that the latitude and longitude is taken
        google.maps.event.addListener(autocomplete, `place_changed`, () => {
            var place = autocomplete.getPlace();
            var latitude = place.geometry.location.lat();
            var longitude = place.geometry.location.lng();
            this.setState({
                lat: latitude,
                lon: longitude
            }) 
        });

        // ajax request for meetup categories
        axios({
            method: 'GET',
            url: 'http://proxy.hackeryou.com',
            dataResponse: 'json',
            paramsSerializer: function (params) {
                return Qs.stringify(params, { arrayFormat: 'brackets' })
            },
            params: {
                reqUrl: 'https://api.meetup.com/2/categories',
                params: {
                    key: '6a49717012332a5d284f3c775460653',
                },
                proxyHeaders: {
                    'header_params': 'value'
                },
                xmlToJSON: false
            }
        }).then((res) => {
            const meetupCategories = res.data.results;
            this.setState({
                meetupCategories
            })
        });
    }
    render() {
        return (
            <div className="wrapper">
                <TitleOnLandingPage />
                <div className="innerWrapper">
                    <form action="" className="user-form" onSubmit={this.handleSubmit} loading={this.state.loading}>
                      <input 
                          id="searchTextField"
                          type="text"
                          size="50"
                          placeholder="Enter a city"
                          name="locationInput"
                          required
                      />
                      <select name="categoryInput" onChange={this.handleChange} required>
                        {this.state.meetupCategories.map(category => <option value={category.id} key={category.id}>{category.name}</option>)}
                      </select>
                      {/* <label htmlFor="startDate">Events between:</label>
                      <input type="date" id="startDate" required required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"/>
                      <input type="date" id="endDate" required required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"/> */}
                      <button>Search</button>
                     </form>
                </div>
                <LandingPageFooter />
            </div>  
        )
    }
}

export default withRouter(LandingPage);