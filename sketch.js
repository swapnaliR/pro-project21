var bullet , wall;
var speed, weight;
var thickness;

var damage
function setup() {
  createCanvas(windowWidth,windowHeight);
  bullet = createSprite(50, 200, 50, 10);
  bullet.shapeColor = "white";
  thickness = random(22,83)

  wall= createSprite(width-100,height/2,thickness,height/2);
 wall.shapeColor=  rgb(80,80,80)
  speed = random(223,321);
  weight= random(30,52);
  bullet.velocityX = speed;

 damage =(0.5 * weight*speed*speed)/(thickness*thickness*thickness)

  
}

function draw() {
  background(0);  


  

 /* if(wall.x - bullet.x < (wall.width/2 + bullet.width/2) && bullet.x - wall.x <(wall.width/2 + bullet.width/2)){
     bullet.velocityX =0;
    if(damage>10){
        wall.shapeColor = "red"
      }else{
        wall.shapeColor = "green"
      }
  } */

 if( collided(bullet,wall)){
  bullet.velocityX =0;
  if(damage>10){
      wall.shapeColor = "red"
    }else{
      wall.shapeColor = "green"
    }
 }
  drawSprites();
}


function collided(lbullet, lwall){
 rightEdge = lbullet.x+lbullet.width;
 leftWallEdge = lwall.x;

 if(rightEdge>leftWallEdge){
   return true;
 }
 else{
   return false;
 }
}