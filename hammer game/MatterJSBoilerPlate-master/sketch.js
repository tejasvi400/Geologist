
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var hammer;
var rubber;
var iron;
var ground;
var stone;


function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  	ground= new Ground(400,590,800,10);
    hammer=new Hammer1(700,500,40,40);
    stone= new Stone(650,350,40,40);
    rubber=new Rubber(600,300,40);
    iron= new Iron(590,320);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  hammer.display();
  ground.display();
  stone.display();
  rubber.display();
  iron.display();
 
}



