import React, { useState, useEffect } from 'react'
import dummyApi from '../../api/dummyApi'
import UserComponent from './userComponent'
import SearchOnChangeComponent from './searchOnChangeComponent'
import { useDebounce } from '../../hooks/useDebounce'

const DebouncedSearchUsingCustomHooks = () => {
  const [users, setUsers] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = useDebounce(searchTerm)

  const fetchUsers = async (queryParam = '') => {
    const fetchedUsers = await dummyApi.get(`/users${queryParam && ('?searchTerm=' + queryParam)}`)
    setUsers(fetchedUsers.data)
  }

  useEffect(() => {
    fetchUsers(debouncedSearchTerm)
  }, [debouncedSearchTerm])


  return (
    <div>
      <h2>Users using useEffect Hook</h2>
      <SearchOnChangeComponent setSearchTerm={setSearchTerm} searchTerm ={searchTerm}/>
      <div className="ui relaxed divided list">
        {users.length > 0 && users.map(user => <UserComponent key={user.id} user={user} />)}
      </div>
    </div>
  )
}

export default DebouncedSearchUsingCustomHooks