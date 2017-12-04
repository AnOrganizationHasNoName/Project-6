import React from 'react';
import { Link } from 'react-router-dom';

class Restaurants extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <button><Link to="/">Return To Home</Link></button>
                <ul className="restaurants">
                    {this.props.data.map(restaurant => {
                        return <li key={restaurant.id} className="restaurant">
                        <section className="resHead">
                            <div className="resMainTitle">
                                <h2>{restaurant.name}</h2>
                            </div>
                        </section>

                        <section className="resInfo">
                            <div className="resTags">
                                <div className="resTagsTitle">
                                    <h3>Address: </h3>
                                    <p>{restaurant.vicinity}</p>
                                </div>
                                <div className="resTagsTitle">
                                    <h3>Contact: </h3>
                                    <p>{restaurant.international_phone_number}</p>
                                </div>
                                <div className="resTagsTitle">
                                    <h3>Rating: </h3>
                                    <p>{restaurant.rating}</p>
                                </div>
                            </div>
                            
                            <div className="resLinks">
                                <div className="resURL">
                                    <button><a href={restaurant.website}>Visit Website</a></button>
                                </div>
                                <div className="resDirections">
                                    <button><a href={restaurant.url}>{restaurant.url}</a></button>
                                </div>
                            </div>
                        </section>
                           {/*  <p>Address: {restaurant.vicinity}</p>
                            <p>Phone Number: {restaurant.international_phone_number}</p>
                            <p>Google Rating: {restaurant.rating}/5</p>
                            <p>Website: <a href={restaurant.website}>{restaurant.website}</a></p>
                            <p>Directions: <a href={restaurant.url}>{restaurant.url}</a></p> */}
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Restaurants;
