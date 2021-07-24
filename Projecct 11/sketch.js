var path;
var surfer;

function preload(){
  //pre-load images
  surfer = loadAnimation("Runner-1.png","Runner-2.png");
  pathImg = addImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;
  surfer = createSprite(200,200);
  surfer.addAnimation("surfer","Runner-1.Img","Runner-2.Img");
}

function draw() {
  background(0);
  if(path.y > 400){
    path.y = height/2;
  }
  drawSprites();
}
