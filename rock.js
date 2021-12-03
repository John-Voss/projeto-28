class Rock {
    constructor(x, y) {
        var options = {
            //isStatic: true,
            restitution: 1,
            friction: 1,
            density: 1.5
        }
        this.rock = Bodies.circle(x, y, 20/2, options);
        World.add(world, this.rock);
    }
    display() {
        var pos = this.rock.position;
        ellipseMode(CENTER);
        strokeWeight(2);
        stroke('black');
        fill('#DC143C');
        ellipse(pos.x, pos.y, 20, 20);
    }
}