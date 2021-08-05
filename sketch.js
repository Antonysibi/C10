var ship;
var ship_sailing;
var seaImg;
var sea;
function preload(){
seaImg = loadImage("sea.png");
ship_sailing = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  ship = createSprite(400,200)
  ship.addAnimation("movingShip",seaImg1);
  
  ship.scale = 0.25;
  ship.x = 50

  sea = createSprite(130,200,30,30);
  sea.addImage(seaImg);
  ground.x = ground.width/2;
  sea.scale=0.3;
}

function draw() {
  background("blue");
  sea.velocityx = -5;
  if(sea.x < 0 ){
    ground.x = ground.width/2
  }
 drawSprites();
}

