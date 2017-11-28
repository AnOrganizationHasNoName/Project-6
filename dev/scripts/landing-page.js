import React from "react";
import axios from "axios";
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

export default class LandingPage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            country: ''
        } 
    }
    componentDidMount(){

    }
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
                <div>
                    <CountryDropdown
                        value={country}
                        onChange={(val) => this.selectCountry(val)} labelType={"short"} />
                </div>
                <input type="text" className="city-input"/>
                <button>Search</button>
            </div>
        )
    }
}

