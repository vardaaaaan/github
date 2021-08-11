
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world,object;
function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

object= Bodies.rectangle(200,100,50,50);
object2= Bodies.circle(500,50,100);



World.add(world,[object1,object2]);


}
function draw()
{
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  fill("red");
  rect(object.position.x,object.position.y,200,200);
  fill("blue");
    circle(object2.position.x,object2.position.y,100);
    
  
}