class CrewMember {


  constructor(position) {
    this.position = position
    if (this.currentShip === undefined) {
      this.currentShip = 'Looking for a Rig'
    }
    if (this.position === 'Pilot' && this.currentShip === undefined) {
      this.engageWarpDrive = function () {
        return 'had no effect'
      }
    }
    if (this.position === 'Defender' && this.currentShip === undefined) {
      this.engageWarpDrive = function () {
        return 'had no effect'
      }
    }
    if (this.position === 'Gunner' && this.currentShip === undefined) {
      this.engageWarpDrive = function () {
        return 'had no effect'
      }
    }

  }




}

