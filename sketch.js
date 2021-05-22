
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject, paper
var world;


function setup() {
	createCanvas(1600,800);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(width-200,650);
	paper = new Paper(width/2,height/2)

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(230);
 

  paper.display();
  groundObject.display();
  dustbinObj.display();
  


  paper.depth = dustbinObj.depth + 1

}
function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:84,y:-125});
    }
}
