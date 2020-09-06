var ground,Dustbins1,Dustbins2,Dustbins3,paper1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1200, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,1000,1200,10);
	Dustbins1 = new Dustbin(800,990,200,10);
	Dustbins2 = new Dustbin(700,950,10,100);
	Dustbins3 = new Dustbin(900,950,10,100);
	paper1 = new Paper(200,445,20,20);
   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  ground.display();
  Dustbins1.display();
  Dustbins2.display();
  Dustbins3.display();
  paper1.display();
  
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:420,y:-900})
	}
}



