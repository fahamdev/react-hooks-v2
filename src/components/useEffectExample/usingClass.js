import React, { Component } from 'react'
import dummyApi from '../../api/dummyApi'
import UserComponent from './userComponent'

export class usingClass extends Component {
  state = {
    users: []
  }

  fetchUsers = async () => {
    const fetchedUsers = await dummyApi.get('/users')
    this.setState({ users: fetchedUsers.data })
  }

  componentDidMount() {
    this.fetchUsers()
  }

  render() {
    const { users } = this.state
    return (
      <div>
        <h2>Users in Class Component</h2>
        <div className="ui relaxed divided list">
          {users.length > 0 && users.map(user => <UserComponent key={user.id} user={user} />)}
        </div>
      </div>
    )
  }
}

export default usingClass
