var fixedRect;
var movingRect;




function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 50);
  movingRect = createSprite(400,400,50,20);
  fixedRect.debug = true;
  movingRect.debug = true;
}

function draw() {

  background("blue");
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY; 
  if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2
    && fixedRect.x-movingRect.x < movingRect.width/2+fixedRect.width/2
    && movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2
    && fixedRect.y-movingRect.y < movingRect.height/2+fixedRect.height/2) {
      fixedRect.shapeColor = "yellow";
      movingRect.shapeColor = "yellow";
    }
    else {
      fixedRect.shapeColor = "pink";
      movingRect.shapeColor = "pink";
    }

  drawSprites();
}