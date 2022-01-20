import React from 'react'

const Input = React.forwardRef(({ label, placeholder }, ref) => {
  return (
    <div className="ui labeled input Bottom-small-margin Full-width">
      <div className="ui label Fixed-Width-label">
        {label}
      </div>
      <input ref={ref} type="text" placeholder={placeholder} />
    </div>
  )
})

export default Input
