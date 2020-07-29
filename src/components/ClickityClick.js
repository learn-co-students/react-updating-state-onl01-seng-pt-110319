// Code ClickityClick Component Here
import React from 'react'

class ClickityClick extends React.Component {
    constructor() {
        super()

        this.state = {
            // hasBeenClicked: false,
            toggled: false,
            count: 0
        }
    }

    hasBeenClicked = () => {

    }

    handleClick = () => {
        // let newCount = this.state.count + 1
        this.setState(previousState => {
            return { 
                toggled: !previousState.toggled,
                count: previousState.count + 1
            }
        })
        
    }

    render() {
        return(
            <div>
                <h1>{this.state.count}</h1>
                {/* <p> I have {this.state.hasBeenClicked ? null : 'not'} been clicked! </p> */}
                <button onClick={this.handleClick}>{this.state.toggled ? 'ON' : 'OFF'}</button>
            </div>
        )
    }
}

export default ClickityClick
