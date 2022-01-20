import React from 'react'

const UserComponent = ({ user }) => {
  return (
    <div className="item">
      <div className="content">
        <h4 className="header User-name">{user.name}</h4>
        <div className="description">{user.email}</div>
      </div>
    </div>
  )
}

export default UserComponent
