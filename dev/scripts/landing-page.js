import React from "react";
import axios from "axios";
<<<<<<< HEAD
/* import { CountryDropdown, RegionDropdown } from 'react-country-region-selector'; */
=======
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import CountriesArray from './country-array';
>>>>>>> 9833ee97905d575af1d2458e866dd32d8de0d161

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
<<<<<<< HEAD
        this.state = {
            country: [],
            cityInput: '',
            catInput: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state={
            country: [],
=======
        this.state={
>>>>>>> 9833ee97905d575af1d2458e866dd32d8de0d161
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

<<<<<<< HEAD

//yvonne code


=======
>>>>>>> 9833ee97905d575af1d2458e866dd32d8de0d161
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { country } = this.state;
        return (
<<<<<<< HEAD
              <div>
                  <div>
                      <h1>MeetUp Page</h1>
                  </div>
 
                <div className="form-container">
                    <form action="" className="user-form" onSubmit={this.handleSubmit}>
                        <div>
                           {/*  <CountryDropdown
                                value={country} onChange={(val) => this.selectCountry(val)} labelType={"short"} onChange={this.handleChange} value={this.state.country} name="country"  */}
                            <select name="country-dropdown" id="">
                                {CountryArray.map((country, i)=>{ {
                                    return (
                                        <div>
                                            <label htmlFor={i}>{country[i].name}</label>
                                        <option id={i} value={country[i].code}>{country[i].name}</option>
                                        </div>
                                    )}
                                })}
                            </select>
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
         
=======
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
>>>>>>> 9833ee97905d575af1d2458e866dd32d8de0d161
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