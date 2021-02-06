
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(650, 650, 1300, 20)
	box1=new Box(1100, 630, 200, 20)
	box2=new Box(990, 580, 20, 100)
	box3=new Box(1210, 580, 20, 100)

	ball1=new Ball(300, 645, 30)
	Engine.run(engine);
  
}


function draw() {
  background(0);
  ground.display()
  ball1.display()
  box1.display()
  box2.display()
  box3.display()
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body, ball1.body.position, {x:170, y:-170})

	}
}

