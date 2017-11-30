import React from 'react';

class Restaurant extends React.Component {
    constructor() {
        super();
    }
    render() {
        return(
            <ul>
                <li><h2>{this.props.data.name}</h2></li>
                <li><p>{this.props.data.vicinity}</p></li>
                <li><p>Rating: {this.props.data.rating}</p></li>
            </ul>
        )
    }
}

export default Restaurant;