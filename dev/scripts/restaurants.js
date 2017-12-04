import React from 'react';
import { Link } from 'react-router-dom';
import LoadingAnimation from './loading-animation';


class Restaurants extends React.Component {
    constructor() {
        super();
    }
    render() {
        if (this.props.loading) {
            return (
                LoadingAnimation
            )} else {
        return (
                <div className="resContainer">
                    <button><Link to="/">Return To Home</Link></button>
                    <ul className="restaurants">
                        {this.props.data.map(restaurant => {
                            return <li key={restaurant.id} className="restaurant">
                                <h2>{restaurant.name}</h2>
                                <p>Address: {restaurant.vicinity}</p>
                                <p>Phone Number: {restaurant.international_phone_number}</p>
                                <p>Google Rating: {restaurant.rating}/5</p>
                                <p>Website: <a href={restaurant.website}>{restaurant.website}</a></p>
                                <p>Directions: <a href={restaurant.url}>{restaurant.url}</a></p>
                            </li>
                        })}
                    </ul>
                </div>
            )
        }
    }
}

export default Restaurants;