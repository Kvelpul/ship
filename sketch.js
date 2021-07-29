var shipMov, seaImg, sea, ship

function preload(){

shipMov=loadAnimation("ship-1.png" , "ship-2.png" , "ship-3.png" , "ship-4.png");
seaImg=loadImage("sea.png");


}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,180,400,20);
  sea.addImage("Background", seaImg);
  sea.x = sea.width/2


  ship = createSprite(150,240,10,10);
  ship.addAnimation("moving", shipMov);
  ship.scale = 0.30;

}

function draw() {
  background("white");
 sea.velocityX = -4;
 if(sea.x < 0)(
   sea.x=sea.width/2
 );

 drawSprites();
}

