import React from "react";
import axios from "axios";
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            country: '',
            cityInput: '',
            catInput: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
        console.log(e.target.value)
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
        const { country } = this.state;
        return (
            <div>
                <div>
                    <h1>MeetUp Page</h1>
                </div>

                <div className="form-container">
                    <form action="" className="user-form" onSubmit={this.handleSubmit}>
                        <div>
                            <CountryDropdown
                                value={country} onChange={(val) => this.selectCountry(val)} labelType={"short"} onChange={this.handleChange} value={this.state.country} name="country" />
                        </div>
                        <div>
                            <input type="text" name="cityInput" className="city-input" placeholder="city" onChange={this.handleChange} value={this.state.cityInput} />
                        </div>
                        <div>
                            <input type="text" name="catInput" className="category-input" placeholder="category" onChange={this.handleChange} value={this.state.catInput} />
                        </div>
                        <div>
                            <button onSubmit={this.handleSubmit}>Search</button>
                        </div>
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