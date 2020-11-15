const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1=new Bob(300,350,50);
bob2=new Bob(350,350,50);
bob3=new Bob(400,350,50);
bob4=new Bob(450,350,50);
bob5=new Bob(500,350,50);
 fill ("brown");
  ground1 = new Ground(400,100,300,40);
  sling1= new Roof(bob1.body,ground1.body,-50*2,0);
  sling2= new Roof(bob2.body,ground1.body,-25*2,0);
  sling3= new Roof(bob3.body,ground1.body,-0*2,0);
  sling4= new Roof(bob4.body,ground1.body,25*2,0);
  sling5= new Roof(bob5.body,ground1.body,50*2,0);
	Engine.run(engine);
  
}


function draw() {
  background("BLUE");
//	ground.fill(48,22,8);
	//ground.stroke(0);
  rectMode(CENTER);
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  ground1.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  

  keyPressed();
  drawSprites ();
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-30,y:-30}); } 
} 





