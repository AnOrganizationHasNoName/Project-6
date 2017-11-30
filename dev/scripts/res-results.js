import React from 'react';

export default class ResResults extends React.Component {
    constructor(){
        super();
        this.state={
            res: []
        }
    }
    componentDidMount(){
        console.log(this.props.data)
    }
    render(){
        return (
            <div>
                    {this.props.data.map((endRes)=> {
                        return (
                            <ul key={endRes.id}>
                                <li key={endRes.name}>Name: {endRes.name}</li>
                                <li key={endRes.vicinity}>>Address: {endRes.vicinity}</li>
                                <li key={endRes.rating}>Rating: {endRes.rating}</li>
                            </ul>
                        )
                    })}
            </div>
        )
    }
}