var ship,ship_sailing,edges;
var seaImg;
var sea;
function preload(){
seaImg = loadImage("sea.png");
ship_sailing= loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  shipImg = createSprite(200,200,150,150)
  shipImg.addAnimation("sailing",seaImg);
  
  ship.scale = 0.5;
  ship.x = 50

  sea = createSprite(200,180,400,20);
  sea.addImage("sea",seaImg);
  ground.x = ground.width/2;
}

function draw() {
  background("blue");
  sea.velocityx = -2;
  if(sea.x < 0 ){
    ground.x = ground.width/2
  }
 drawSprites();
}