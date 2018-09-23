'use strict'

class Player {

  constructor(obj){
    this.id = obj.id
    this.name = obj.name
    this.team = obj.team
    this.position = obj.position
    this.nationality = obj.nationality
    this.dorsal = obj.dorsal
    this.img = obj.img
  }

}

module.exports = Player