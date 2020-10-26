class Bob {
    constructor(x, y, radius) {
      var options = {
          'restitution':1.2,
          'friction':0,
          'density':0.8,
      }
      this.body = Bodies.circle(x, y, radius/2, options);
      this.radius = radius;
     // Body.setAngle(this.body, radius);
            
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      circle(0, 0, this.radius);
      fill("blue");
      //stroke("blue");
      circle(0, 0, this.radius);
      pop();
    }
  };