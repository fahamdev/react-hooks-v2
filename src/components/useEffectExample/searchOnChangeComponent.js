import React from 'react'

const SearchOnChangeComponent = ({ setSearchTerm, searchTerm }) => {
 
  return (
    <div className="ui input">
      <input type="text" placeholder="Search..." onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} />
    </div>
  )
}

export default SearchOnChangeComponent