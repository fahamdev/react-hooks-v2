import React, { useState } from 'react'

const SearchComponent = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div className="ui input">
      <input type="text" placeholder="Search..." onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} />
      <button className="ui button" onClick={() => onSearch(searchTerm)}>Search</button>
    </div>
  )
}

export default SearchComponent
