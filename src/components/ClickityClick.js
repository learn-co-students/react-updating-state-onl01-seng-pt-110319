// Code ClickityClick Component Here
import React from 'react'
class ClickityClick extends React.Component{
    constructor(){
        super();
        // define the initial state:
        this.state={
            hassBeenClicked: false
        };
    }
    handleClick=()=>{
        // update our state here...
        this.setState({
            // passed in objects will merge with current state. when updates it automatically rerenders
            hasBeenClicked: true
          },
          () => console.log(this.state.hasBeenClicked));
    }
    render(){
        return(
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        );
    }
}
export default ClickityClick;