import React from "react";
import axios from "axios";
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { Link } from 'react-router-dom';
import CountriesArray from './country-array';
import Qs from 'qs';
import TitleOnLandingPage from "./landing-page-header";
import LandingPageFooter from "./landing-page-footer";


export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cityInput: '',
            categoryInput: 1,
            country: '',
            meetupCategories: [],
            showRes: true
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.formSubmit(this.state.cityInput, this.state.country, this.state.categoryInput);
        this.setState = {
            showRes: false
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
           
        })
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
                <div className="inner-wrapper">
            <form action="" className="user-form" onSubmit={this.handleSubmit}>

                        <select name="country" onChange={this.handleChange}>
                            <option disabled selected>Country</option>
                            {CountriesArray.map((country, i) =>
                                <option
                                    value={country.code}
                                    key={`country-${i}`}
                                >
                                    {country.name}
                                </option>)
                            }
                        </select>
                        <input type="text"
                            name="cityInput"
                            className="cityInput"
                            placeholder="City"
                            onChange={this.handleChange}
                            value={this.state.cityInput}
                        />
                        <select name="categoryInput" onChange={this.handleChange}>
                            <option disabled selected>Category</option>
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
