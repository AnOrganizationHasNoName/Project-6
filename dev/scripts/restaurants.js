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
                <ul className="resCont clearfix">
                    {this.props.data.map(restaurant => {
                        return <li className="resInfo" key={restaurant.id}>
                            <div className="resHeader">
                                <h2>{restaurant.name}</h2>
                            </div>

                            <div className="resInfoCont">
                                <span>Address: </span><p>{restaurant.vicinity}</p>
                                <span>Contact: </span><p>{restaurant.international_phone_number}</p>
                                <span>Rating: </span><p>{restaurant.rating}/5</p>
                            </div>
                            <div className="resLink">
                                <button><a href={restaurant.website}>Website</a></button>
                            </div>
                            <div className="resLink">
                                <button><a href={restaurant.url}>Directions</a></button>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Restaurants;