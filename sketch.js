const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground;
var dustbin1,dustbin2,dustbin3;

function setup() {
	createCanvas(800, 500);
    engine = Engine.create();
	world = engine.world;
	
  paper = new Paper(100,420,0,0);
	ground = new Ground(400,height,800,20);
	dustbin1 = new Dustbin(580,435,10,100);
	dustbin2 = new Dustbin(650,485,150,10);
	dustbin3 = new Dustbin(720,435,10,100);
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
 
}
function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85})
  }
}
