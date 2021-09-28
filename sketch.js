
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ball, ground;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var ground_options= {
    isStatic : true
  }

  ground = Bodies.rectangle(200,380,400,20, ground_options);
  World.add(world,ground);

  var ball_options = {
    restitution : 1,
    frictionAir : 0.01
  }

  ball = Bodies.circle(200,100,20, ball_options);
  World.add(world,ball);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  rect(ground.position.x, ground.position.y, 400,20);

  ellipse(ball.position.x,ball.position.y,20);
  //rect(ground.position.x,ground.position.y,400,20);
 


  
  
}

