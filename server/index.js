const express = require('express') // require express and set to "express"
const ctrl = require('./controllers/messages_controller') // import messages controller method and set to "ctrl"
const app = express() // invoke "express" and set to "app"
app.use(express.json()) // always parse json
app.use(express.static(__dirname + '/../public/build'));

const baseURL = '/api/messages'
app.post('/api/messages', ctrl.create)
app.get('/api/messages', ctrl.read)
app.put(`${baseURL}/:id`, ctrl.update)
app.delete(`${baseURL}/:id`, ctrl.delete)

const SERVER_PORT = 3001 // set server port 3001 to "SERVER_PORT"
app.listen(SERVER_PORT, () => console.log(`Server is running on port ${SERVER_PORT}`)) // listen on server port 3001
