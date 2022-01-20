import React, { useReducer } from 'react'
import ButtonGroup from './buttonGroup'

const limitRGB = num => (num < 0 ? 0 : num > 255 ? 255 : num)

const step = 30

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT_R':
      return { ...state, r: limitRGB(state.r + step) }
    case 'DECREMENT_R':
      return { ...state, r: limitRGB(state.r - step) }
    case 'INCREMENT_G':
      return { ...state, g: limitRGB(state.g + step) }
    case 'DECREMENT_G':
      return { ...state, g: limitRGB(state.g - step) }
    case 'INCREMENT_B':
      return { ...state, b: limitRGB(state.b + step) }
    case 'DECREMENT_B':
      return { ...state, b: limitRGB(state.b - step) }
    default:
      return state
  }
}

const UsingUseReducer = () => {
  const [{ r, g, b }, dispatch] = useReducer(reducer, { r: 0, g: 0, b: 0 })

  return (
    <div className='Text-centered'>
      <div className='Bottom-medium-margin'>
        <i style={{ color: `rgb(${r}, ${g}, ${b})` }} className='gem icon huge center'></i>
      </div>
      <div>
        <ButtonGroup colour='R' increaseValue={() => dispatch({ type: 'INCREMENT_R' })} decreaseValue={() => dispatch({ type: 'DECREMENT_R' })} />
        <ButtonGroup colour='G' increaseValue={() => dispatch({ type: 'INCREMENT_G' })} decreaseValue={() => dispatch({ type: 'DECREMENT_G' })} />
        <ButtonGroup colour='B' increaseValue={() => dispatch({ type: 'INCREMENT_B' })} decreaseValue={() => dispatch({ type: 'DECREMENT_B' })} />
      </div>
    </div>

  )
}

export default UsingUseReducer
