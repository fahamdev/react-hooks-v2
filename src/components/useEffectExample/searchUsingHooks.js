import React, { useState, useEffect } from 'react'
import dummyApi from '../../api/dummyApi'
import UserComponent from './userComponent'
import SearchComponent from './searchComponent'

const SearchUsingHooks = () => {
  const [users, setUsers] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const fetchUsers = async (queryParam = '') => {
    const fetchedUsers = await dummyApi.get(`/users${queryParam && ('?searchTerm=' + queryParam)}`)
    setUsers(fetchedUsers.data)
  }

  useEffect(() => {
    fetchUsers(searchTerm)
  }, [searchTerm])

  return (
    <div>
      <h2>Users using useEffect Hook</h2>
      <SearchComponent onSearch={setSearchTerm} />
      <div className="ui relaxed divided list">
        {users.length > 0 && users.map(user => <UserComponent key={user.id} user={user} />)}
      </div>
    </div>
  )
}

export default SearchUsingHooks