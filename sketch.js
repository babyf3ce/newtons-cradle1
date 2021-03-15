const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var rope;
var bob1, bob2, bob3, bob4, bob5;
var roof;

function preload() {}

function setup() {
  createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  bob1 = new Bob(205, 300, 80, 80);
  bob2 = new Bob(370, 300, 80, 80);
  bob3 = new Bob(485, 300, 80, 80);
  bob4 = new Bob(575, 300, 80, 80);
  bob5 = new Bob(680, 300, 80, 80);
  //rope1 = new Rope(Bob.js, Roof.js);
  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  drawSprites();
}
