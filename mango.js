class Mango {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true,
            restitution: 0.8,
            friction: 1,
            density: 1
        }
        this.mango = Bodies.rectangle(x,y,width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage('download (1).png');
        World.add(world, this.mango);
    }
    display() {
        var pos = this.mango.position;
        var ang = this.mango.angle;
        push();
        translate(pos.x, pos.y);
        rotate(ang);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}