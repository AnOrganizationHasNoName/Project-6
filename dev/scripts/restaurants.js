import React from 'react';
import { Link } from 'react-router-dom';

class Restaurants extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <button><Link to="/" onClick={this.props.reset}>Return To Home</Link></button>
                <ul className="restaurants">
                    {this.props.data.map(restaurant => {
                        return <li key={restaurant.id} className="restaurant">
                            <p><span>Address: </span>{restaurant.vicinity}</p>
                            <p><span>Phone Number: </span>{restaurant.international_phone_number}</p>
                            <p><span>Google Rating: </span>{restaurant.rating}/5</p>
                            <button><a href={restaurant.website}>Website</a></button>
                            <button><a href={restaurant.url}>Directions</a></button>
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Restaurants;