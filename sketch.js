
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload(){
	var ball_options={
isStatic:false,
restitution:0.3,
friction:0,
density:1.2
	}
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
Matter.Bodies.circle(200,100,20,ball_options);
world.add(world,ball);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPressed(){
if (keyCode === UP_ARROW){

Matter.Body.applyForce(ball{x:0,y:0},{x:0,y:-0.3})		

}
}

