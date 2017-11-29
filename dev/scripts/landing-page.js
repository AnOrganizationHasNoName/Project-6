import React from "react";
import axios from "axios";
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

export default class LandingPage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            country: '',
            cityInput: '',
            CatInput: ''
        } 
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // method to take user input values and store in variable

    // submit event handler
    handleSubmit(e) {
        console.log("I am the handleSubmit")
        e.preventDefault();
<<<<<<< HEAD
      
=======
>>>>>>> 7f6ab8a791f4933e25af1599ef619d508d160009
        this.setState({
            country: e.target.value,
            cityInput: e.target.value,
            CatInput: e.target.value
        }); 
    } 

//yvonne code
    
    selectCountry(val) {
        this.setState({ country: val });
    }

    render(){
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
                                value={country} onChange={(val) => this.selectCountry(val)} labelType={"short"} />
                        </div>
                        <div>
                            <input type="text" className="city-input" placeholder="city" />
                        </div>
                        <div>
                            <input type="text" className="category-input" placeholder="category" />
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


