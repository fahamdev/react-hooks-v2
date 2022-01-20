import React from 'react'
import UsingClass from './usingClass'
import UsingHooks from './usingHooks'
import Clock from './clock'
import SearchUsingHooks from './searchUsingHooks'

const Index = () => {
  return (
    <div>
      <div className="ui grid centered">
        <Clock />
      </div>
      <div className="ui grid centered">
        {/* <div className="five wide column">
          <UsingClass />
        </div> */}
        {/* <div className="five wide column">
          <UsingHooks />
        </div> */}
        <div className="five wide column">
          <SearchUsingHooks />
        </div>
      </div>
    </div>
  )
}

export default Index