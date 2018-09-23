'use strict'

const express = require('express')
const app = express()
const cors = require('cors')
const playerController = require('./controller/playerController')

const port = process.env.PORT || 3001

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

/* API Routes */
app.get('/api/player', playerController.GetPlayers)
app.post('/api/player', playerController.AddPlayer)

app.listen(port, () => {
  console.log('Server running')
})