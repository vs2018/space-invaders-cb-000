class Spaceship extends CrewMember {

  constructor(name, crewArray, phasers, shields) {
    this.name = name
    this.crewArray = crewArray
    for (var crew in crewArray) {
      crew.currentShip = 
    }
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = 'disengaged'
    if (crewArray.length === 0) {
      this.docked = true
    } else {
      this.docked = false
    }
    this.phasersCharge = 'uncharged'

  }






}
