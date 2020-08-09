// Code ClickityClick Component Here
import React from 'react';

export default class ClickityClick extends React.Component {
    constructor() {
        super()
        
        this.state = {
            toggled: false
        };
    }

    handleClick = () => {
        console.log(`Value before click: ${this.state.toggled}`)
        this.setState(previousState => {
            return {
                toggled: !previousState.toggled
            }
        }, () => console.log(`Value after click: ${this.state.toggled}`))
    }

    render() {
        return(
        <button onClick={this.handleClick}>Turned {this.state.toggled? "ON" : "OFF"}</button>
        )
    }
}