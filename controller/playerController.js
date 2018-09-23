'use strict'

const { db } = require('../config/config')

let playerRef = db.ref('/player')
const Player = require('../model/player')

async function AddPlayer(req, res) {

  console.log('OK')
  const id = playerRef.push().key

  const player = new Player({
    id: id,
    name: req.body.name,
    team: req.body.team,
    position: req.body.position,
    nationality: req.body.nationality,
    dorsal: req.body.dorsal,
    img: req.body.img
  })

  const response = await playerRef.child(id)
    .set(player)
    .then(() => player)

  res.status(200).send(response)

}

async function GetPlayers(req, res) {

  const data = await playerRef.once("value")
  const response = data.val()

  if (response == null)
    return res.status(200).send({players: []})

  let players = Object.values(response)
    .map(obj => { return new Player(obj) })

  res.status(200).send(players)

}

module.exports = {
  AddPlayer,
  GetPlayers
}