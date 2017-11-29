import React from "react";
import axios from "axios";
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import CountriesArray from './country-array';
import Qs from 'qs';

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cityInput: '',
            categoryInput: '',
            country: '',
            meetupCategories: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.formSubmit(this.state.cityInput, this.state.country, this.state.categoryInput);
        // this.setState({
        //     cityInput: '',
        //     categoryInput: '',
        //     country: ''
        // })
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
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
            <form action="" className="user-form" onSubmit={this.handleSubmit}>
                <ul>
                    <li>
                        <select name="country" onChange={this.handleChange}>
                            {CountriesArray.map((country, i) =>
                                <option
                                    value={country.code}
                                    key={`country-${i}`}
                                >
                                    {country.name}
                                </option>)
                            }
                        </select>
                    </li>
                    <li>
                        <input type="text"
                            name="cityInput"
                            className="cityInput"
                            placeholder="City"
                            onChange={this.handleChange}
                            value={this.state.cityInput}
                        />
                    </li>
                    <li>
                        <select name="categoryInput" onChange={this.handleChange}>
                            {this.state.meetupCategories.map((category)=>{
                                return <option value={category.id} key={category.id}>{category.name}</option>
                            })}
                        </select>
                    </li>
                    <li>
                        <button onSubmit={this.handleSubmit}>Search</button>
                    </li>
                </ul>
            </form>
        )
    }
<<<<<<< HEAD
}

// html structure to take inputs(E) city, category
// Method to take hard - coded inputs and store in variable / state
// html structure to take button(E)
// method to take user input on submit / click
// Store user inputs as parameters / variables to use in ajax request

// copy and paste the object into a new file
// on landing page, repalce CountryDropDown with a select element, with the array and map() country argument
// for each of these, you are returning option elements
// with the value equal to value={country.code}
// label={country.name}
=======
}
>>>>>>> 29d6ecabb0ce88d7df453b1bbc9d053027bc15df
