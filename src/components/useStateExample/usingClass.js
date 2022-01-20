import React, { Component } from 'react'

export class usingClass extends Component {
  state = {
    showDefaultTextColour: true
  }

  changeTextColour = () => {
    this.setState((previousState) => {
      return { showDefaultTextColour: !previousState.showDefaultTextColour }
    })
  }

  render() {
    return (
      <div>
        <h2
          style={{ color: this.state.showDefaultTextColour ? 'black' : 'red' }}
          onClick={this.changeTextColour}>
          Click on text to change colour [Class Component]
          </h2>
      </div>
    )
  }
}

export default usingClass
