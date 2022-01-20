import React from 'react'

const ButtonGroup = ({ colour, increaseValue, decreaseValue }) => {
  return (
    <div className = "Bottom-small-margin">
      <div className="ui big buttons">
        <button className="ui button icon positive" onClick={increaseValue}><i className="plus icon"></i></button>
        <div className="or" data-text={colour}></div>
        <button className="ui button icon negative" onClick={decreaseValue}><i className="minus icon"></i></button>
      </div>
    </div>

  )
}

export default ButtonGroup
