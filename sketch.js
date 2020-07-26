var car, wall, speed, weight;

var damage;

function setup (){
  createCanvas(1000,400)


speed=random(55,90);
weight=random(400,1500);


car = createSprite(20,200,10,20);

wall=createSprite(980,200,20,100);
car.velocityX=speed;

}

function draw (){
  background(0);
if (wall.x-car.x<(car.width*wall.width)/2){
car.velocityX=0
var deformation = 0.5*weight*speed*speed/22509
if (deformation>180){
  car.shapeColor=color(255,0,0);
}

if (damage<180&&deformation>100){
  car.shapeColor=color(230,230,0);
}
if (damage<100){
  car.shapeColor=color(0,255,0);

drawSprites();
}
}
}