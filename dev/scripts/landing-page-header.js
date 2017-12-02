import React from 'react';


export default class TitleOnLandingPage extends React.Component {
    constructor(){
        super();
    }
    render(){
        return (
            <section className="main-title">
                <div className="inner-wrapper">
                    <h1>Travel Meetups</h1>
                    <h2 className="app-description">Find upcoming meetups and nearby restaurants in your area!</h2>
                </div>
            </section>
        )
    }
}