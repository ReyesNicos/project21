var bullet, wall;
var speed,weight,thickness;


function setup() {
  createCanvas(1600,1000);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet = createSprite(50, 300, 200, 80);
  
  wall = createSprite(700,300,thickness,height/2);
  


  bullet.velocityX=speed;
}

function draw() {
  background("white");  
  
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  
  

  if(bullet.x-wall.x < bullet.width/2 + wall.width/2){
    bullet.velocityX=0;
    if(damage > 10){
      bullet.shapeColor="red";
    }else{
      bullet.shapeColor="green";
    }
  }
   

  
  drawSprites();
}