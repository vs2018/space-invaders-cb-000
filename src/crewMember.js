class CrewMember {


  constructor(position) {
    this.position = position
    if (this.currentShip === undefined) {
      this.currentShip = 'Looking for a Rig'
    }
    if (this.position === 'Pilot' && this.currentShip === undefined) {
      this.engageWarpDrive = function () {
        
      }
    }
    if (this.position === 'Defender') {

    }
    if (this.position === 'Gunner') {

    }

  }




}


tristan = new CrewMember('Pilot');
jon = new CrewMember('Defender');
katie = new CrewMember('Gunner');

// -const expect = chai.expect;


//   it("should return 'Looking for a Rig' if they aren't assigned to a ship", () => {
//     expect(tristan.currentShip).to.match(/Looking for a Rig/i);
//   });
//
//   it("should return 'had no effect' when the crew member tries to use their special ability when not assigned to a ship", () => {
//     expect(tristan.engageWarpDrive()).to.match(/had no effect/i);
//     expect(jon.setsInvisibility()).to.match(/had no effect/i);
//     expect(katie.chargePhasers()).to.match(/had no effect/i);
//   });
// });
