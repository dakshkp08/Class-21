var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

gameObject_1 = createSprite(200,200,50,50);
gameObject_2 = createSprite(300,200,50,60);

gameObject_1.shapeColor = "yellow";
gameObject_2.shapeColor = "purple";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if(Mobole(movingRect,gameObject_2)){
  movingRect.shapeColor = "red";
  gameObject_2.shapeColor = "red";
}
else{
  movingRect.shapeColor = "green";
  gameObject_2.shapeColor = "yellow";
  
}
if(Mobole(movingRect,gameObject_1)){
  movingRect.shapeColor = "red";
  gameObject_1.shapeColor = "red";
}
else{
  movingRect.shapeColor = "green";
  gameObject_1.shapeColor = "purple";
  
}


  drawSprites();
}
