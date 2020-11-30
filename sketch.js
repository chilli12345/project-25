
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,side1,side2,side3;
var dustbinImage;

function preload()
{
  dustbinImage=loadImage("dustbingreen.png");	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    
	//Create the Bodies Here.
 
	paper = new Paper(100,200,70);
	ground = new Ground(width/2,680,width,20)
	side1 = new Dustbin(560, 580, 10, 180);
	side2 = new Dustbin(630, 665, 140, 10);
	side3 = new Dustbin(725, 580, 10, 180);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  side1.display();
  side2.display();
  side3.display();
  image(dustbinImage,546,470,200,200);
  paper.display();
  ground.display();
  
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:800, y: -800})
    }
}


