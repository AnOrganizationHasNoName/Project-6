import React from "react";
import axios from "axios";
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import CountriesArray from './country-array';

export default class LandingPage extends React.Component {
    constructor(props) {
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
        this.setState({
            cityInput: '',
            catInput: '',
        })
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { country } = this.state;
        return (
            <div>
                <div>
                    <h1>MeetUp Page</h1>
                </div>

                <div className="form-container">
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
                </div>
              </div>
        )
    }
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