
var trex ,trex_running;
var cactus1;
var cactus2;
var cactus3;
var cactus4;
var cactus5;
var cactus6;
var cactus;
var cloudimage;
var sueloinvisible;
function preload(){
 trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
groung = loadImage("ground2.png");
cloudimage = loadImage("cloud.png");
cactus1 = loadImage("obstacle1.png");
cactus2 = loadImage("obstacle2.png");
cactus3 = loadImage("obstacle3.png");
cactus4 = loadImage("obstacle4.png");
cactus5 = loadImage("obstacle5.png");
cactus6 = loadImage("obstacle6.png");
}

function setup(){
  createCanvas(600,200)
  
  //crear sprite de Trex
 trex = createSprite(50,160,20,50);
 trex.addAnimation("running",trex_running);
 trex.scale = 0.5;
 ground1 = createSprite(200,180,400,20);
 ground1.addImage  (groung);
 ground1.velocityX = -6;
 sueloinvisible = createSprite(200,190,400,10);
 sueloinvisible.visible = false
}

function draw(){
  background("white")
 if (keyDown("space")&&trex.y >=140) {
  trex.velocityY=-10
 } 
 trex.velocityY = trex.velocityY+0.4;
 if(ground1.x < 0){
  ground1.x = ground1.width/2;
 }
 trex.collide(sueloinvisible);
 nubes();
 cactusz();

drawSprites();
}
function nubes(){
  if(frameCount %60==0){
  var nube = createSprite(600,60);
  nube.addImage(cloudimage)
 nube.scale=0.8;
nube.y = Math.round(random(10,60));
  nube.velocityX = -10;
  nube.lifetime = 200;
  nube.depth = trex.depth;
  trex.depth = trex.depth+1;
}
}
function cactusz(){
if(frameCount %60==0){
var cactus = createSprite(600,155);
cactus.velocityX =-5;

var rand = Math.round(random(1,6));
switch (rand){
case 1:cactus.addImage(cactus1);
break;
case 2:cactus.addImage(cactus2);
break;
case 3:cactus.addImage(cactus3);
break;
case 4:cactus.addImage(cactus4);
break;
case 5:cactus.addImage(cactus5);
break;
case 6:cactus.addImage(cactus6);
break;
default:break;
}
cactus.scale=0.7
cactus.lifetime =190
}  
}