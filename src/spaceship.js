class Spaceship {

  constructor(name, crewArray, phasers, shields) {
    this.name = name
    this.crewArray = crewArray

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
    this.notifyCrew();


  }






}
