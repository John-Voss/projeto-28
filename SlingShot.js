class SlingShot { 
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.body = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.body);
    }
    attach(body) {
        this.body.bodyA = body;
    }

    fly() {
        this.body.bodyA = null;
    }
    display() {
        pointA = this.body.bodyA.position;
        pointB = this.pointB;

        strokeWeight(10);
        stroke('orange');
        fill('orange');
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}