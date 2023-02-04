var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var bomb 
var coin
var energyDrink

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  bomb = loadImage("bomb.png");
  coin = loadImage("coin.png");
  //energyDrink = loadImage("enerdyDrink.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,340,30,30);
boy.addAnimation("JakeRunning",boyImg);
boy.scale=0.08;

bomb=createSprite(180,350,30,30);
coin=createSprite(180,350,30,30);
energyDrink=createSprite(180,350,30,30);
  

leftBoundary=createSprite(0,0,100,800);

// leftBoundary.invisible = false;
// leftBoundary.visible = true;
//leftBoundary.invisible = true;
leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  coin.velocityY=4;
  energyDrink.velocityY=4;
  bomb.velocityY=4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background

  if(path.y > 400 ){
   
  path.y = height/2;
  }

  drawSprites();
}
