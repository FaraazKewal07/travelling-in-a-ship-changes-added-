var ship , shipImage ;
var sea , seaImage ;

function preload(){
shipImage = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
seaImage = loadImage("sea.png");


}

function setup(){
  createCanvas(400,400);
  
  //create a ground sprite
  sea = createSprite(200,200,50,20);
  sea.addImage("sea",seaImage);
  sea.velocityX = -4;
  sea.scale = 0.3;



  ship = createSprite(200,200,50,20);
  ship.addAnimation("ship", shipImage);
  ship.scale = 0.25;
 
  
 
}

function draw() {
  if (sea.x < 0) {
    sea.x = sea.width/8;
  }
  background(0);
 



drawSprites() 
  
}  
 
