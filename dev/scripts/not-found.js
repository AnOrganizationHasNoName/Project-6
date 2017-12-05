import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return(
        <div>
            <h1>404 Page Not Found</h1>
            <p>Oops you probably entered an incorrect link. </p>
            <button><Link to="/">Return To Home</Link></button>
        </div>
    )
}

export default NotFound;