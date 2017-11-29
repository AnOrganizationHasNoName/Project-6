import React from "react";
import axios from "axios";
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import CountriesArray from './country-array';

export default class LandingPage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            cityInput: '',
            catInput: '',
            country: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange= this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        //creating formSubmit props (passing getMeetups function on app.js)
        this.props.formSubmit(this.state.cityInput, this.state.country, this.state.catInput);
//passing in STATE whenever the user changes a value

        this.setState({
            cityInput: '',
            catInput: '',
            country: ''
            //this.setState will be made redundent when we put in routing
        })
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form action="" className="user-form" onSubmit={this.handleSubmit}>
                <ul>
                    <li>
                        <select name="country" onChange={this.handleChange}>
                            {CountriesArray.map((country, i)=> 
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
                        <input type="text"
                            name="catInput"
                            className="catInput"
                            placeholder="Category"
                            onChange={this.handleChange}
                            value={this.state.catInput} 
                        />
                    </li>
                    <li>
                        <button onSubmit={this.handleSubmit}>Search</button>
                    </li>
                </ul>
            </form>     
        )
    }
}

