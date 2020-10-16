const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies

var box1,box2, ground;

function setup() {
  createCanvas(800,400);

  engine=Engine.create();
  world=engine.world;

  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(400,380,800,20,options);
  World.add(world,ground);

  box1=new box(400,350,50,50);
  box2=new box(430,300,50,50);

}

function draw() {
  background(255,255,255);  

  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);

  box1.display();
  box2.display();

}