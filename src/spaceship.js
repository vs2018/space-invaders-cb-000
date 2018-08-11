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
    }


  }




}



    it('should have its cloaking set to false by default', () => {
      expect(spaceship.cloaked).to.eq(false);
    });

    it("should have its warp drive set to 'disengaged' by default", () => {
      expect(spaceship.warpDrive).to.match(/disengaged/i);
    });

    it('should be docked if it has no crew', () => {
      expect(spaceship.docked).to.eq(true);
    });

    it("should have its 'phasers' charge set to 'uncharged' by default", () => {
      expect(spaceship.phasersCharge).to.match(/uncharged/i);
    });
  });
});
