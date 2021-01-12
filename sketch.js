var ground
var player,playerAnimation
var score = 0
function preload(){
playerAnimation = loadAnimation("frame0.png","frame_1.png","frame_2.png","frame_3.png")
//playerAnimation = loadAnimation("frame0.png")
}


function setup() {
  createCanvas(1200,800);
  //createSprite(200,200,20,20)
player=new Player();
player.body.addAnimation("running",playerAnimation)
player.body.scale=0.2
player.body.debug = true
player.body.setCollider ("rectangle",0,0,50,300)
ground=new Ground();
 obstacleGroup = createGroup()
 trapGroup = createGroup()
}

function draw() {
  background("brown");  
  score = World.frameCount
  text("score"+score,100,100)
  player.display()
  spawnObstacles()
  spawnTraps()

if(keyDown("space")){
  player.jump()
}
if(keyDown("LEFT_ARROW")){
  player.body.x=player.body.x-10
  
}
if(keyDown("RIGHT_ARROW")){
  player.body.x=player.body.x+10
  
}

player.body.collide(obstacleGroup)
for (var i=0;i<trapGroup.length;i++){
  if (trapGroup.get(i).isTouching(player.body)){
    player.body.x=200
    player.body.y=200
  }
}
  drawSprites();
  
}
function spawnObstacles() {
 
 if (frameCount%50===0){
  var rand = random(100,600)
  var obstacle = createSprite (1200,rand,80,10)
  obstacle.velocityX = -5
  obstacleGroup.add(obstacle)
 }

}
function spawnTraps() {
 
  if (frameCount%140===0){
   var rand = random(100,600)
   var trap = createSprite (1200,rand,80,10)
   trap.velocityX = -5
   trap.shapeColor = "red"
   trapGroup.add(trap)
  }
 
 }