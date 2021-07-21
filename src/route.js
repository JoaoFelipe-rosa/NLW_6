const express = require('express')

const route = express.Router()

route.get('/', (req, res) => res.render("index"))
route.get('/room', (req, res) => res.render("room"))
route.get('/create-room', (req, res) => res.render("create-room"))

//formto do formulario da modal
//route.get('/room/:room/:question/:action')



module.exports = route