class CrewMember {


  constructor(position) {
    this.position = position
    this.currentShip = undefined
    if (this.currentShip === undefined) {
      this.currentShip = 'Looking for a Rig'
    }
    }

    engageWarpDrive () {
      if (this.position === 'Pilot' && this.currentShip === 'Looking for a Rig') {
        return 'had no effect'
      }
    }

    setsInvisibility () {
      if (this.position === 'Defender' && this.currentShip === 'Looking for a Rig') {
        return 'had no effect'
      }
    }

    chargePhasers () {
      if (this.position === 'Gunner' && this.currentShip === 'Looking for a Rig') {
        return 'had no effect'
      }
    }











  }
