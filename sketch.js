
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roofObj, bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(800, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	roofObj = new roof(width/2,height/4,width/7,20);

	bobDiameter = 40;

	bob1 = new bob(startbobPositionX-bobDiameter*2, startbobPositionY, bobDiameter);
	bob2 = new bob(startbobPositionX-bobDiameter, startbobPositionY, bobDiameter);
	bob3 = new bob(startbobPositionX, startbobPositionY, bobDiameter);
	bob4 = new bob(startbobPositionX-bobDiameter, startbobPositionY, bobDiameter);
	bob5 = new bob(startbobPositionX-bobDiameter*2 ,startbobPositionY, bobDiameter);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width: 1200,
			height: 700,
			wireframes: false
		}
	});

	  rope1 = new rope(bob1.body, roofObj.body, -bobDiameter*2, 0)
	  rope2 = new rope(bob1.body, roofObj.body, -bobDiameter*1, 0)
	  rope3 = new rope(bob1.body, roofObj.body, 0, 0)
	  rope4 = new rope(bob1.body, roofObj.body, -bobDiameter*1, 0)
	  rope5 = new rope(bob1.body, roofObj.body, -bobDiameter*2, 0)

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(230, 230, 230);
  
  roofObj.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(bob1.body. bob1.body.position, {x: -50, y: -45})
}
}

function drawLine(constraint){
	bobBodyPosition = constraint.bodyA.position
	roofBodyPosition = constraint.bodyB.position

	roofBodyOffset = constraint.pointB;

	roofBodyX = roofBodyPosition.x + roofBodyOffset.x
	roofBodyY = roofBodyPosition.y + roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX, roofBodyY);
}
