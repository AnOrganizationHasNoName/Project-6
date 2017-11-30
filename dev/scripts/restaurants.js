import React from 'react';

class Restaurants extends React.Component {
    constructor() {
        super();
    }
    render() {
        return(
            <ul className="restaurants">
                {this.props.data.map(restaurant =>{
                    return <li key={restaurant.id}>
                        <h2>{restaurant.name}</h2>
                        <p>{restaurant.vicinity}</p>
                        <p>{restaurant.rating}</p>
                    </li>
                })}
            </ul>
        )
    }
}

export default Restaurants;