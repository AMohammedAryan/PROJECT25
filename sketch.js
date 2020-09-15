const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var crumbledPaper, dustbinBase, dustbinLeft, dustbinRight;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	crumbledPaper = new Paper(100, 450, 40);
	dustbinBase = new Dustbin(550, 570, 80, 100);
	dustbinLeft = new Dustbin(560, 560, 40, 10);
	dustbinRight = new Dustbin(650, 560, 40, 160);

	ground = new Ground();

	Engine.run(engine);
  
}


function draw() {

  Engine.update(engine);

  rectMode(CENTER);
  background(255);

  //dustbinLeft.display();
  //dustbinRight.display();

  ground.display();

  crumbledPaper.display();

  dustbinBase.display();
  
  drawSprites();
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Body.applyForce(crumbledPaper.body, crumbledPaper.body.position, {x:60, y:-60});}
}
