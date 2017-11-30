import React from 'react';

export default class ResResults extends React.Component {
    cosntructor(){
        // super();
        this.state={
            res: []
        }
    }
    componentDidMount(){
        console.log(this.props.data)
    }
    render(){
        return (
            <ul>
                    <p>Name:{this.props.data.map((endRes)=> {
                        return (
                            <li>{endRes.name}</li>
                        )
                    })}</p>
            </ul>
        )
    }
}