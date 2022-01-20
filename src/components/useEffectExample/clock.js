import React, { useState, useEffect } from 'react'

const Clock = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    let timerId = setTimeout(() => {
      setTime(new Date())
    }, 1000)
    return () => clearTimeout(timerId)
  })

  return (
    <div className="ui raised segment">
      <h1>Time - {time.toLocaleTimeString()}</h1>
    </div>
  )
}

export default Clock
