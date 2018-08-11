class CrewMember {


  constructor(position) {
    this.position = position
    if (this.currentShip === undefined) {
      this.currentShip = 'Looking for a Rig'
    }
    
  }




}


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
