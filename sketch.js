var bg, backgroundImg;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironImage = loadImage("images/iron.png");
  }

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  bg.scale =2;
 
  ironMan = createSprite(200, 505, 20, 50);
  ironMan.addImage("running", ironImage);
  ironMan.scale = 0.3;
  
}

function draw() {

  if (keyDown("up")) {
    ironMan.velocityY = -10;
  }
  if (keyDown("left")) {
    ironMan.x = ironMan.x - 5;
  }
  if (keyDown("right")) {
    ironMan.x = ironMan.x + 5;
  }
  ironMan.velocityY = ironMan.velocityY + 0.5;
    drawSprites();
   
}