import React, { useState, useEffect } from 'react'
import dummyApi from '../../api/dummyApi'
import UserComponent from './userComponent'

const UsingHooks = () => {
  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
    const fetchedUsers = await dummyApi.get('/users')
    setUsers(fetchedUsers.data)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div>
      <h2>Users using useEffect Hook</h2>
      <div className="ui relaxed divided list">
        {users.length > 0 && users.map(user => <UserComponent key={user.id} user={user} />)}
      </div>
    </div>
  )
}

export default UsingHooks