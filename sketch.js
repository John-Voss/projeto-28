const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;

var mango1, mango2, mango3, mango4, mango5;
var rock;
var boy, tree;
var ground;
var slingShot;

function preload() {
  boy = loadImage('download (2).png'); 
  tree = loadImage('download.png');
}

function setup() {
	createCanvas(1500, 1400);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  }
  ground = Bodies.rectangle(750, 1400, 1500, 5, options);
  World.add(world, ground);

  rock = new Rock(160, 1215);

  mango1 = new Mango(1000, 850, 75, 75);
  mango2 = new Mango(1350, 950, 50, 50);
  mango3 = new Mango(1300, 850, 100, 100);
  mango4 = new Mango(950, 1050, 90, 90);
  mango5 = new Mango(1100, 900, 55, 55);

  //slingShot = new SlingShot(rock.body, {x:1000, y:1215});
}

function draw() {
  background('#87CEFA');
  Engine.update(engine);
  fill('black');
  textSize(35);
  text('Press "space", if you want to play again!', 200, 80);

  imageMode(CENTER);
  image(boy, 200, 1290, 100, 224);
  image(tree, 1150, 1100, 700, 705);
  rectMode(CENTER);
  fill('#FF8C00');
  rect(ground.position.x, ground.position.y, 1500, 5);

  rock.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  slingShot.display();
}
function mouseDragged() {
  Matter.Body.setPosition(rock.body, {x: mouseX, y: mouseY});
}
function mouseReleased() {
  slingShot.fly();
}
function keyPressed() {
  if(keyDown('space')) {
    Matter.Body.setPosition(rock.body, {x: 160, y: 1215});
    slingShot.attach(rock.body);
  }
}






