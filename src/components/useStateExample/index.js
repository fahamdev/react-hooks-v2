import React from 'react'
import UsingClass from './usingClass'
import UsingHooks from './usignHooks'

const Index = () => {
  return (
    <div className="ui grid centered">
      <div className="eight wide column">
        <UsingClass />
      </div>
      <div className="eight wide column">
        <UsingHooks />
      </div>
    </div>
  )
}

export default Index