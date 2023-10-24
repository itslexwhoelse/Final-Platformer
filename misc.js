
/*
all the setup needed to be able to play a level
this has gravity camera movement key detection, etc
*/
let group;
let beeswax;
let jumping;
let camX;
let camY;
function constants() {  
Benson.velocity.y += GRAVITY; //gives Benson gravity
  
// //CAMERA CONSTRAINTS 
  while (camera.position.x < Benson.position.x) {
  camera.position.x++
  }
  while (camera.position.x > Benson.position.x) {
  camera.position.x--
  }
  while (camera.position.y < Benson.position.y-(windowHeight/3)) {
      camera.position.y++
  }
    while (camera.position.y > Benson.position.y+(windowHeight/6)) {
  camera.position.y--
  }

   
  if (Benson.collide(spike)) {
  deathFault = 'Benson was impailed by spikes.'
    state = 'GAMEOVER'
  }
  if (Benson.collide(platform)) { 
      //do this setup for any obj that is jumped on
    Benson.velocity.y = 0;
    jumping = false
    
  }
   if (Benson.collide(it)) {
   touched =true
    spawnPole() 
  }
  if (Benson.position.y > TPlatform.height+Benson.height) {
  } else {
    if (Benson.collide(tplatform)) { 
      //do this setup for any obj that is jumped on
    Benson.velocity.y = 0;
    jumping = false
    }
  }
if (Benson.collide(deathWall)) {
deathFault = "There is no choice. The hard way is the only way!"
  state = "GAMEOVER"
}
  
  if (Benson.collide(winPole) && touched == true ||Benson.collide(winPole2) && touched == true) {
  state = 'win'
  }
  if (Benson.collide(winPole||winPole2) && touched == false||Benson.collide(winPole2) && touched == false) {
  push()
  }
    if (keyDown('m')) { // "m" mutes the music
desertSong.stop()
  }

  if (keyDown('d')) { // "D" makes Benson go right
   Benson.velocity.x = bensonVeloc
    Benson.changeAnimation('moving')
    Benson.mirrorX(1)
  }
    if(keyWentUp('d')) {
      Benson.velocity.x = 0
        Benson.changeAnimation('idle')
    }
  if (keyDown('a')) { // "A" makes Benson go left
   Benson.velocity.x = -bensonVeloc
    Benson.changeAnimation('moving')
    Benson.mirrorX(-1)
  }
    if(keyWentUp('a')) {
      Benson.velocity.x = 0
        Benson.changeAnimation('idle')
    }
  if (!jumping && keyWentDown('w') ||!jumping && keyWentDown('SPACE')) {  // !jumping && 
      Benson.velocity.y = -JUMP
    jumping= true
    jump.setVolume(0.25)
    jump.play()
      }
  
}




//makes the text outputted the same size as the canvas
let m;
function textSetup() {
  let ret = (textSize()/textWidth())
  let merit =log(windowWidth)/(log((textSize())/ret))
  mets = pow(textSize(), merit)
  textSize(mets*0.5)
  
}

function DEBUG() {
  if (showLines == true) {
   camera.off()
  line((windowWidth/6), 0, (windowWidth/6), windowHeight);
  line((windowWidth/6)*5, 0, (windowWidth/6)*5, windowHeight);
  line(0,windowHeight/3.5,windowWidth,windowHeight/3.5);
  camera.on()
  line(Benson.position.x,Benson.position.y-60,camera.mouseX,camera.mouseY)   // shows where the bullet will go
  line (0,-windowHeight,desertFloor.width,-windowHeight)
  //this will be the area the playing is constrained to if the character goes past these lines the camera will move a little
  //world lines
  }
  textSize(15)
  if (showGrid == true) {
  for (var i = 0 ; i < 40; i++) { //i is the X
    for (var j = -10; j < 4; j++) { //j is the Y
      stroke(120, 0, 120);
      strokeWeight(1);
      noFill();
      rect(200*i, 200*j, 200, 200);
      noStroke();
      fill(120, 0, 120);
      text('world(' + 200*i + ',' + 200*j + ')', 200*i+4, 200*j+12);
    }
  }
  }
}
let xparallax = {}
let scrollspeed = 4
let xScroll1 = 0
function desertBackground() {
   background(0,193,255);
  xparallax.hill1 = map(camera.position.x, 0, -width, -width * 0.5 - 133, -width * 0.5 + 133)
  push()
  scale(2.4)
  translate(0,-windowHeight/1.8)
  image(sky, -windowWidth/2.68+xScroll1,windowHeight-(sky.height*1.14),sky.width,sky.height)
  image(sky, -windowWidth/5.65+xScroll1+sky.width-200,windowHeight-(sky.height*1.16),sky.width,sky.height)
  xScroll1 -=scrollspeed
    if (xScroll1 <= -sky.width) {
    xScroll1 = 0
    }
  pop()
  push()
  noStroke()
  rectMode(CORNERS)
  fill(208,157,105)
    rect(-windowWidth,800,windowWidth*10,windowHeight*3)
  pop()
  push()
scale(2.4)
  image(hill2,xparallax.hill1/3,0, hill2.width, hill2.height)
  image(hill1,xparallax.hill1/2,0, hill1.width, hill1.height)
  pop()
  image(cactus,0,800-(cactus.height/1.15), cactus.width, cactus.height)
  image(cactus,cactus.width - cactus.width/3,800-(cactus.height/1.15), cactus.width, cactus.height)
}