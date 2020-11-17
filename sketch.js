var fixedRect, movingRect;
var sprite1, sprite2

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  sprite1 = createSprite(400,100,80,30);
  sprite1.shapeColor = "green";
  sprite2 = createSprite(50,200,80,30);
  sprite2.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  collision(fixedRect, movingRect);

  collision(sprite1, movingRect)
  collision(sprite2, movingRect)
  

  /*if(collision()){

    movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";

  }
  
  else {

  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";

  
  
  } */
  drawSprites();
}

