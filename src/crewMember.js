class CrewMember{


  constructor(position) {
    this.position = position

      this.currentShip = 'Looking for a Rig'

    }

    engageWarpDrive () {
      if (this.position === 'Pilot' && this.currentShip === 'Looking for a Rig') {
        return 'had no effect'
      } else {
        this.currentShip.warpDrive = 'engaged'
      }
    }

    setsInvisibility () {
      if (this.position === 'Defender' && this.currentShip === 'Looking for a Rig') {
        return 'had no effect'
      }
      if (this.position === 'Defender' && this.currentShip !== 'Looking for a Rig') {
        this.currentShip.cloaked = true

      }
    }

    chargePhasers () {
      if (this.position === 'Gunner' && this.currentShip === 'Looking for a Rig') {
        return 'had no effect'
      } else {

      }
    }











  }
