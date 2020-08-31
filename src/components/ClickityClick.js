import React, { Components } from 'react';

class ClickityClick extends Components {

  constructor() {
    super();
    // Defined the initial state:
    this.state = {
      hasBeenClicked: false,
      currentTheme: 'blue'
    }
  } 

  handleClick = () => {
    this.setState({
      hasBeenClicked: true
    })
  }

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    )
  }
}

export default ClickityClick