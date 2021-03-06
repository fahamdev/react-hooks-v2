import React, { useRef } from 'react'
import Input from './input'

const Index = () => {
  const firstNameInputEl = useRef(null);
  const middleNameInputEl = useRef(null);
  const lastNameInputEl = useRef(null);
  return (
    <div>
      <div className="ui grid centered">
        <div className="eight wide column">
          <div className='Full-width'>
            <div className='Full-width'>
              <Input ref={firstNameInputEl} label='First Name' placeholder='First Name' />
              <Input ref={middleNameInputEl} label='Middle Name' placeholder='Middle Name' />
              <Input ref={lastNameInputEl} label='Last Name' placeholder='Last Name' />
            </div>
            <div className="blue ui buttons Full-width">
              <button className="ui button" onClick={() => firstNameInputEl.current.focus()}>First Name</button>
              <button className="ui button" onClick={() => middleNameInputEl.current.focus()}>Middle Name</button>
              <button className="ui button" onClick={() => lastNameInputEl.current.focus()}>Last name</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
