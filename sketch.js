var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
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
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	//if(keyPressedDOWN_ARROW);
	//package.velocityY=-2;

   wall1=createSprite(300,620,40,90);
   wall1.shapeColor=color(255,0,0);

   wall2=createSprite(425,647,200,20);
   wall2.shapeColor=color(255,0,0);

   wall3=createSprite(550,620,40,90);
   wall3.shapeColor=color(255,0,0);

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);

//	packageBody.Body.setStatic(body,isStatic);
	


	//Create a Ground
	ground= Bodies.rectangle(425, 647, 200,20 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}
	
function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 


  packageSprite.bounceOff(wall1);
	packageSprite.bounceOff(wall2);
	packageSprite.bounceOff(wall3);

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);

    
  }
}



