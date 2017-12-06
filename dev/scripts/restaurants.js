import React from 'react';
import { Link } from 'react-router-dom';

class Restaurants extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="wrapper">
                <button className="homeBtn"><Link to="/" onClick={this.props.reset}>Return To Home</Link></button>
                <ul className="resCont">
                    {this.props.data.map(restaurant => {
                        return <li className="resInfo" key={restaurant.id}>
                            <span>Address: </span><p>{restaurant.vicinity}</p>
                            <span>Phone Number: </span><p>{restaurant.international_phone_number}</p>
                            <span>Google Rating: </span><p>{restaurant.rating}/5</p>

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