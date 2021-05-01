var car, wall;
var speed, weight;
function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  car = createSprite(50,200,50,50);
  car.velocityX = speed;

  wall = createSprite(1500,200,600,height/2)

  speed = random(55,90);
  weight = random(1600,400);
}

function draw() {
  background(255,255,255);
  if (car.x - wall.x < wall.width/2 + car.width/2
     && wall.x - car.x < wall.width/2 + car.width/2){
    car.velocityX=0;
    var deformation = 0.5*weight*speed*speed/22509;
    if (deformation > 180){
      car.shapeColour = color(255,0,0);
    }
    if (deformation < 180 && deformation > 100){
      car.shapeColour = color(230,230,0);
    }
    if (deformation < 100){
      car.shapeColour = color(0,255,0);
    }
  }
  drawSprites();
}