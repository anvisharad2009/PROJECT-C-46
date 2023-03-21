var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg;

var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img;

var zombieGroup;

var score = 0;
var life = 3;
var bullets = 70;

var heart1, heart2, heart3

var gameState = "fight"

var lose, winning, explosionSound;


function preload(){

  bgImg = loadImage ("bg.jpeg")
  heart1Img  = loadImage ("heart_1.png")
  heart2Img  = loadImage ("heart_2.png")
  heart3Img  = loadImage ("heart_3.png")
  shooterImg = loadImage ("shooter_2.png")
  shooter_shooting = loadImage ("shooter_3.png")
  zombieImg = loadImage ("zombie.png")
}

function setup() {
createCanvas(windowWidth , windowHeight)

player = createSprite (windowWidth-1000 , windowHeight-100 , 30 , 50)
player.addImage(shooterImg);
player.scale = 0.4

heart1 = createSprite (windowWidth-60 , windowHeight-650 , 30 , 30)
heart1.addImage (heart1Img)
heart1.scale = 0.3
heart1.visible = false 

heart2 = createSprite (windowWidth-80 , windowHeight-650 , 30 , 30)
heart2.addImage (heart2Img)
heart2.scale = 0.3
heart2.visible = false 

heart3 = createSprite (windowWidth-110 , windowHeight-650 , 30 , 30)
heart3.addImage (heart3Img)
heart3.scale = 0.3
heart3.visible = true
}


function draw() {
  background(bgImg); 

  if (keyDown ("UP_ARROW") ) {
    player.y = player.y-10
  }

  if (keyDown ("DOWN_ARROW") ) {
    player.y = player.y+10
  }

 drawSprites ()
}

