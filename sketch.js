/*
Lex D.
Final Platformer 
start date:11/8/2021

Libs used: 
https://molleindustria.github.io/p5.play/
https://p5js.org/reference/#/libraries/p5.sound
*/

let state = 'main menu'; //this is the first state and 0 is the main menu
//debug vars
let debug = false
let showGrid = true
let showLines = false


//benson related vars
var Benson;
var moving;
var idle;
var bensonVeloc = 7 //this sets benson's speed
var JUMP = 20//Benson's jump height
var deathFault;
let cameraY
let isPlaying = {}


let touched = false;
let v1;
let v2;
var bulletSpeed = 7 // this is the bullet speed
var SCENE_W;
var SCENE_H;
var GOTimer = 3 // this is the game over timer, after 3 seconds any button can be pressed to reset the timer this only goes for the first time, any other times its instant

//scenes
let desertFloor;

let platform = []
let Tplatform = []
let spikes = []
let sbox = []
let sbox1 = []
let GLOBAL_VOLUME = 0.30

var GRAVITY = 1


function preload() {
  for(var u=1; u<=20;u++) {
  spikes[u] = loadImage('main/lvl/desert/spikes.png')
  }
  font = loadFont('main/PeachesForBreakfast-Regular.otf');
  titleScreen = loadSound('main/audio/titleScreen.mp3')
  fire = loadSound('main/audio/fire.wav')
  gameOver = loadSound('main/audio/gameLoss.wav')
  hurt = loadSound('main/audio/hurt.wav')
  desertSong = loadSound('main/audio/desBounce.wav')
  victory = loadSound('main/audio/Victory.mp3')
  jump = loadSound('main/audio/jump.wav')
  hill1 = loadImage('main/lvl/desert/bg/hill1.png')
  hill2 = loadImage('main/lvl/desert/bg/hill2.png')
  sky = loadImage('main/lvl/desert/bg/sky.png')
  fireworks = loadImage("main/fireworks.gif")
  
  placeholderBG = loadImage('main/bg/placeholder.png')
  bigPole = loadImage("main/pole.gif")
  desertFloor = loadImage('main/lvl/desert/desertFloor.png')
  cactus = loadImage("main/lvl/desert/DesertCactus.png")
   for(var d=1; d<=20;d++) { 
  sbox1[d] =  loadImage("main/lvl/desert/desertBox2.png")
  }
  for(var t=1; t<=30;t++) { 
  sbox[t] =  loadImage("main/lvl/desert/desertBox.png")
  }

  idle = loadAnimation('main/sprite/BensonIdle.png')
  eyeBALL = loadAnimation("eye/sprite_0.png","eye/sprite_1.png","eye/sprite_2.png","eye/sprite_3.png","eye/sprite_4.png","eye/sprite_5.png","eye/sprite_6.png","eye/sprite_7.png","eye/sprite_8.png")
  moving = loadAnimation('main/sprite/BensonIdle.png', 'main/sprite/BensonLeft.png','main/sprite/BensonIdle.png', 'main/sprite/BensonRight.png')
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  let SENE_W = desertFloor.width
  let SCENE_H = windowHeight
  Benson = createSprite(3,windowHeight/2)
  var cameraY = camera.position.y
  
// Benson's Animations
        Benson.addAnimation("idle",idle)
        Benson.addAnimation('moving',moving)

  
  Benson.setCollider("rectangle") 
  winPole = createSprite(7700,800-(bigPole.height/2), 21,bigPole.height)
  winPole.addImage('winning', bigPole)
  winPole2 = createSprite(7700,(800-2*(bigPole.height/2)), 21,bigPole.height)
  winPole2.addImage('winning', bigPole)
  
  platform = new Group() //all sides have collision
  tplatform = new Group () //just the top has collision (can enter from the bottom)
  spike = new Group() //these kill you
  it = new Group()
  deathWall = new Group();
  thingAtBegining = new Group();
  levelSetup()
}

function draw() {
  // print(state);
    noSmooth()
//this will be the stuff that changes
  if (state == 'main menu') {
    let timer = millis()
    if (timer>100 && !isPlaying.titleScreen) {
    titleScreen.setVolume(GLOBAL_VOLUME)
    titleScreen.play()
      isPlaying.titleScreen = true
    }
  background(255,214,139)
     textAlign(CENTER, CENTER)
  fill(127)
  textSetup()
  text( 'Welcome to:' ,windowWidth/2, windowHeight/4)
  text( "Benson's Desert Adventure!" ,windowWidth/2, windowHeight/3)
  textSize(mets/4)
    text('Press any key to continue', windowWidth/2, windowHeight/1.75)
  text('AD to move', windowWidth/6, windowHeight/1.25)
  text('W or Space to jump', windowWidth/6, windowHeight/1.35)
  text('Click to shoot and m to mute song', windowWidth/6, windowHeight/1.15)
    
  if (keyIsPressed == true) {
    titleScreen.stop()
  Benson.position.x = 200
  Benson.position.y = 200
  state = 0
  }
  }
  
  
if (state == 0) {
  
   if (!isPlaying.desertSong) {
    desertSong.setVolume(GLOBAL_VOLUME)
    desertSong.play()
     desertSong.setLoop(true)
      isPlaying.desertSong = true
    }
  constants()
  desertBackground() //creates the desert and the parallax

  

//limits benson's movement to the level
  if(Benson.position.x < 0) { // cuts movement to left wall
    Benson.position.x = 0;
    Benson.changeAnimation('idle')  
  }
  if(Benson.position.y < -windowHeight*1.5) 
    Benson.position.y = -windowHeight*1.5; 
  if(Benson.position.x >=7900) {
    Benson.position.x = 7900
    Benson.changeAnimation('idle')
  }
  if(Benson.position.y > windowHeight+desertFloor.height) {
   deathFault = 'Benson fell through the quick sand.'
    state = 'GAMEOVER'
  }
  //shooting mechanic
  angleMode(DEGREES)
  camera.off()
  v1 = createVector(Benson.position.x, Benson.position.y-60);
  v2 = atan2(camera.mouseY-v1.y,camera.mouseX-v1.x)
  //tells the bullet where to go, there's a section in debug that shows a line
  camera.on()
//that was just a line to see where the thing is going, it won't be there later
  if(mouseWentDown(LEFT)) {
    fire.setVolume(GLOBAL_VOLUME)
    fire.play()
  let bullet = createSprite(Benson.position.x, Benson.position.y-90)   
  bullet.addAnimation('shoot', eyeBALL)
      bullet.changeAnimation('shoot')
      bullet.scale = 4
      bullet.setSpeed(bulletSpeed,v2)
      bullet.life = 40
    
  }
  
 for(var i = 0; i<platform.length; i++) {
    var p = platform[i];
 }
   for(var i2 = 0; i2<TPlatform.length; i2++) {
    var p2 = Tplatform[i];
 }
  

  drawSprites()
  levelDynamics()


}
if (state == 'GAMEOVER') {
  desertSong.stop()
  isPlaying.desertSong = false
   if (!isPlaying.hurt) {
    hurt.play()
      isPlaying.hurt = true
    }
   if (!isPlaying.gameOver) {
     gameOver.setVolume(GLOBAL_VOLUME)
    gameOver.play()
      isPlaying.gameOver = true
    }
  
  touched = false
  Benson.velocity.x=0
  Benson.changeAnimation('idle')
  let time = millis()
  background(0)
  camera.position.x = windowWidth/2
  camera.position.y = windowHeight/2
  textAlign(CENTER, CENTER)
  fill(127)
  textSetup()
  text( deathFault ,windowWidth/2, windowHeight/2)
  textSize(mets/4)
  text('Press any key to continue', windowWidth/2, windowHeight/1.5)
  if (frameCount % 60 == 0 && GOTimer > 0 ) {
    GOTimer--
  }
  if (GOTimer == 0 && keyIsPressed == true) {
    Benson.position.x = windowWidth/2
    Benson.position.y = windowHeight/2
  state = 0
  GOTimer = 1 
    isPlaying.hurt = false
    isPlaying.gameOver = false
  }
    Benson.position.x = 200
  Benson.position.y = 200
}

  
if (state == 'win') {
  notTouchedAtStart= true
    desertSong.stop()
  isPlaying.desertSong = false
   if (!isPlaying.victory) {
    victory.play()
      isPlaying.victory = true
    }
background(35,87,32)
  camera.position.x = windowWidth/2
  camera.position.y = windowHeight/2
   textAlign(CENTER, CENTER)
  fill(127)
  push()
  imageMode(CENTER)
  image(fireworks,windowWidth/2,windowHeight/2)
  image(fireworks,windowWidth/4,windowHeight/4)
  image(fireworks,3*windowWidth/4,windowHeight/4)
  image(fireworks,windowWidth/4,3*windowHeight/4)
  image(fireworks,3*windowWidth/4,3*windowHeight/4)
  

  pop()
  
  textSetup()
  fill(0)
  text( 'YOU WIN!!!!' ,windowWidth/2, windowHeight/2)
  textSize(mets/4)
  text('Press any key to restart', windowWidth/2, windowHeight/1.5)
  if (frameCount % 60 == 0 && GOTimer > 0 ) {
    GOTimer--
  }
  if (GOTimer == 0 && keyIsPressed == true) {
    Benson.position.x = windowWidth/2
    Benson.position.y = windowHeight/2
  state = 0
  GOTimer = 5  
        victory.stop()
  isPlaying.victory = false
  }

}
  
if (debug == true) {
  DEBUG()
}


  
  
  
} //end of draw

function mousePressed() {
print("benson's pos: ",Benson.position.x, Benson.position.y)
print("mouse pos: ", mouseX,mouseY)
}
