import React from "react";
import axios from "axios";
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import CountriesArray from './country-array';

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            country: '',
            cityInput: '',
            catInput: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange= this.handleChange.bind(this);
    }

    // method to take user input values and store in variable

    // submit event handler
    handleSubmit(e) {
        console.log("I am the handleSubmit")
        e.preventDefault();
        this.setState({
            country: this.state.country,
            cityInput: this.state.countryInput,
            catInput: this.state.catInput
        });
    }

//yvonne code
    handleChange(e) {
        // console.log(e.target.value)

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    selectCountry(val) {
        this.setState({
            country: val
        });
    }

    render() {
        // what is this?
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
                                <select name="country-selector">
                                    {CountriesArray.map((country, i)=> <option value={country.code} key={`country-${i}`}>{country.name}</option>)}
                                </select>
                            </li>
                            <li>
                                <input type="text"
                                    name="city-input"
                                    className="city-input"
                                    placeholder="City"
                                    onChange={this.handleChange}
                                    value={this.state.cityInput}
                                />
                            </li>
                            <li>
                                <input type="text"
                                    name="category-input"
                                    className="category-input"
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