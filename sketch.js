var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight=random(30,52);
  thickness=random(22,83)
  bullet=createSprite(100,200,50,10);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "blue";
}

function draw() {
  background(0);  
  bullet.velocityX = speed;
  if(bullet.width/2 + wall.width/2 > wall.x - bullet.x){
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/thickness * thickness * thickness;
  if(damage>10){
    bullet.shapeColor="red"
  }
  if(damage<10){
    bullet.shapeColor="green"
  }
  }
  drawSprites();
}