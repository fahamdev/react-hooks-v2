import React, { useState, useMemo } from 'react'

//recursive function for fibonacci
const fibonacci = n => {
  if (n <= 1) {
    return n
  }
  return fibonacci(n - 1) + fibonacci(n - 2)
}

const Index = () => {
  const [showDefaultTextColour, setDefaultTextColour] = useState(true)
  const [number, setNumber] = useState(1)
  const fib = fibonacci(number)
  // const fib = useMemo(() => fibonacci(number), [number])

  return (
    <div className="ui grid centered">
      <div className="six wide column center aligned">
        <h1 className="ui header centered"
          style={{ color: showDefaultTextColour ? 'black' : 'red' }}
          onClick={() => setDefaultTextColour(!showDefaultTextColour)}>
          Click to change colour
        </h1>
        <div className="Top-margin">
          <h2 className="ui header centered">
            Fibonacci of {number} is {fib}
          </h2>
          <div className="centered">
            <button className="positive ui button" onClick={() => setNumber(number + 1)}>INCREASE</button>
            <button className="negative ui button" onClick={() => setNumber(number - 1)}>DECREASE</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
