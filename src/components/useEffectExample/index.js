import React from 'react'
import Clock from './clock'
// import UsingClass from './usingClass'
// import UsingHooks from './usingHooks'
// import SearchUsingHooks from './searchUsingHooks'
// import SearchOnChangeUsingHooks from './searchOnChangeUsingHooks'
import DebouncedSearchUsingHooks from './debouncedSearchUsingHooks'


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
        {/* <div className="five wide column">
          <SearchUsingHooks />
        </div> */}
        {/* <div className="five wide column">
          <SearchOnChangeUsingHooks />
        </div> */}
         <div className="five wide column">
          <DebouncedSearchUsingHooks />
        </div>
      </div>
    </div>
  )
}

export default Index