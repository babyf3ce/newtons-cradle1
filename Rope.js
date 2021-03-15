class Rope {
  constructor(body1, point2) {
    var options = {
      bodyA: body1.body,
      pointB: point2,
      stiffness: 0.04,
      length: 15,
    };
    // two objects making them connect to a rope connecting to each other more at line 40 sketch.js
    this.rope = Constraint.create(options);
    World.add(world, this.rope);
  }
  display() {
    //if bodyA =null then this happends
    if (this.rope.bodyA) {
      push();
      strokeWeight(10);
      line(
        this.rope.bodyA.position.x,
        this.rope.bodyA.position.y,
        this.rope.pointB.x,
        this.rope.pointB.y
      );
      pop();
    }
  }
  //function to null to activate the if condition
  fly() {
    this.rope.bodyA = null;
  }
}
