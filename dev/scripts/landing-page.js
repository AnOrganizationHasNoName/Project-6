import React from "react";
import axios from "axios";


var countries = require('country-list')();


class LandingPage extends React.Component {
    constructor(){
        super();
        this.state({

        })
    }
    componentDidMount(){

    }
    render(){
        return (
            <div>
                <div>
                    <h1>MeetUp Page</h1>
                </div>

                <select name="country-code">
                    <option value=""></option>
                </select>
                <input type="text" classNmae="city-input"/>
                <button>Search</button>
            </div>
        )
    }
}

