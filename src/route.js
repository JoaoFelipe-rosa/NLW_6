const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router()

route.get('/', (req, res) => res.render("index", {page:'enter-room'}))
route.get('/create-room', (req, res) => res.render("index", {page:'create-room'}))

route.get('/room/:roomId', (req, res) => res.render("room"))

//formto do formulario da modal
route.post('/question/:room/:question/:action', QuestionController.index)
route.post('/my-room', RoomController.create)



module.exports = route