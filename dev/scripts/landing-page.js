import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import CountriesArray from './country-array';
import Qs from 'qs';
import TitleOnLandingPage from "./landing-page-header";
import LandingPageFooter from "./landing-page-footer";

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locationInput: '',
            categoryInput: 1,
            meetupCategories: [],
            lat: 0,
            lon: 0
        }
        this.getLatLng = this.getLatLng.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        const location = this.state.locationInput.replace(/\s/g, "").split(',');
        const locality = location[0];
        const administrativeArea = location[1];
        const country = location[2];
        this.getLatLng(locality, administrativeArea, country);
        this.props.formSubmit(this.state.lat, this.state.lon, this.state.categoryInput);
    }
    getLatLng(locality, administrativeArea, country) {
        axios({
            method: 'GET',
            url: 'http://proxy.hackeryou.com',
            dataResponse: 'json',
            paramsSerializer: function (params) {
                return Qs.stringify(params, { arrayFormat: 'brackets' })
            },
            params: {
                reqUrl: 'https://maps.googleapis.com/maps/api/geocode/json',
                params: {
                    key: 'AIzaSyAG-UVMFM_gjgiNy-bO4GyaosWjbGN3Cj4',
                    components: `locality:${locality}|administrative_area:${administrativeArea}|country:${country}`,
                },
                proxyHeaders: {
                    'header_params': 'value'
                },
                xmlToJSON: false
            }
        }).then(res => {
            const lat = res.data.results[0].geometry.location.lat;
            const lng = res.data.results[0].geometry.location.lng;
            this.setState({
                lat: lat,
                lon: lng
            }) 
        });
    }
    handleBlur(e) {
        // when the user moves away from the input
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
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
        }).then(res => {
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
                <div className="inner-wrapper">
                  <form action="" className="user-form" onSubmit={this.handleSubmit}>
                    <input 
                        id="searchTextField"
                        type="text"
                        size="50"
                        placeholder="Enter a city"
                        name="locationInput"
                        onBlur={this.handleBlur}
                        required
                    />
                    <select name="categoryInput" required onChange={this.handleChange}>
                        {/* <option disabled>Category</option> */}
                        {this.state.meetupCategories.map(category => <option value={category.id} key={category.id}>{category.name}</option>
                        )}
                    </select>
                        <button><Link to="/meetups">Search</Link></button>
                     </form>
                </div>
                <LandingPageFooter />
            </div>  
        )
    }
}
