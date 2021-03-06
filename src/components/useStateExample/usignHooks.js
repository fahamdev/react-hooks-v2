import React, { useState } from 'react'

const UsignHooks = () => {
  const [showDefaultTextColour, setDefaultTextColour] = useState(true)
  return (
    <div>
      <h2
        className='no-select'
        style={{ color: showDefaultTextColour ? 'black' : 'red' }}
        onClick={() => setDefaultTextColour(prevValue => !prevValue)}>
        Click on text to change colour [useState Hook]
        </h2>
    </div>
  )
}

export default UsignHooks
