const express = require('express')
const cors = require('cors')
const port = 3002
const app = express()

const users = [
  { id: 1, name: 'Faham', email: 'faham@mail.com' },
  { id: 2, name: 'Tahmid', email: 'tahmid@mail.com' },
  { id: 3, name: 'Shuvo', email: 'shuvo@mail.com' },
  { id: 4, name: 'Parvez', email: 'parvez@mail.com' },
  { id: 5, name: 'Khalid', email: 'khalid@mail.com' },
]

const searchUser = (searchTerm) => {
  return users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
}

app.use(cors())

app.get('/users', (req, res) => {
  if (req.query.searchTerm) {
    console.log('found searchTerm : ', req.query.searchTerm)
    let searchedUsers = searchUser(req.query.searchTerm)
    return res.send(searchedUsers)
  }
  res.send(users)
})

app.listen(port)
