var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var line1, line2, line3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	//Creating the sprites
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	line1=createSprite(400,640,200,20);
	line1.shapeColor=color('red');

	line2=createSprite(310,580,20,100);
	line2.shapeColor=color('red');

	line3=createSprite(490,580,20,100);
	line3.shapeColor=color('red');

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	//Addding the bodies for the sprites
	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);

	line1Body = Bodies.rectangle(400 , 620 , 200 , 20 , {isStatic:true});
	World.add(world, line1Body);

	line2Body = Bodies.rectangle(310 , 580 , 20 , 100 , {isStatic:true});
	World.add(world, line2Body);

	line3Body = Bodies.rectangle(490 , 580 , 20 , 100 , {isStatic:true});
	World.add(world, line3Body);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);



	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false);
  }
}