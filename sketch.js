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
	dustbinBase = new Dustbin(650, 470, 160, 200);
	dustbinLeft = new Dustbin(550, 460, 40, 160);
	dustbinRight = new Dustbin(750, 460, 40, 160);

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

  keyPressed();
  
  drawSprites();
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Body.applyForce(crumbledPaper.body, crumbledPaper.body.position, {x:65, y:-65});}
}
