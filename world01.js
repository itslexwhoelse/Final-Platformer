let font;
let textString;
let interactableTextString;
var Platform = {}
var TPlatform = {}
var Spike = {}
var notTouchedAtStart = false
let deathWall1;
let deathWall2;
let hitWall = {}
function levelSetup() {
    sbox[1].resize(2000,37)
   Platform.p1 = createSprite(0,800+(37/2),2000,37) //the default sprite height is 37
  platform.add(Platform.p1)
   Platform.p1.addImage(sbox[1])
  
  sbox[2].resize(300,37)
  Platform.p2 = createSprite(7800,800+(37/2),300,(37))
    platform.add(Platform.p2)
   Platform.p2.addImage(sbox[2])
  
  sbox[3].resize(10,10)
  var theOne = createSprite(10,-800,10,10)
   theOne.addImage(sbox[3])
  it.add(theOne)
  
 sbox[4].resize(2030,37)
  Platform.p3 = createSprite(2300,800+(37/2),2000,37)
    platform.add(Platform.p3)
   Platform.p3.addImage(sbox[4])
  
   spikes[1].resize(100,100)
  Spike.s1 = createSprite(3150,800-(spikes[1].height/2),2000,(spikes[1].height))
    spike.add(Spike.s1)
   Spike.s1.addImage(spikes[1])
  
  
    textString = "There's actually a platform here."
    let abox = font.textBounds(textString, 0,0,32)
    TPlatform.t2 = createSprite((abox.w+1384+ 1384/5),abox.h+610-(sbox[4].height),1.5*abox.w,abox.h)
    tplatform.add(TPlatform.t2)
  removeSprite(TPlatform.t2)
    
    
    
 sbox1[1].resize(300,37)
  TPlatform.t1 = createSprite(2243,400+37,300,37)
  tplatform.add(TPlatform.t1)
  TPlatform.t1.addImage(sbox1[1])
  
   sbox[5].resize(300,600)
  Platform.p4 = createSprite(2700,250+(sbox[5].height/2),2000,(sbox[5].height))
    platform.add(Platform.p4)
   Platform.p4.addImage(sbox[5])
  
     sbox[6].resize(300,37)
  Platform.p5 = createSprite(3600,800+(37/2),2000,37)
    platform.add(Platform.p5)
   Platform.p5.addImage(sbox[6])
  
       sbox[7].resize(1000,37)
  Platform.p6 = createSprite(4150,800+(37/2),2300,37)
    platform.add(Platform.p6)
   Platform.p6.addImage(sbox[7])
  
         sbox[8].resize(800,37)
  Platform.p7 = createSprite(5400,800+(37/2),800,37)
    platform.add(Platform.p7)
   Platform.p7.addImage(sbox[8])
  
     spikes[2].resize(100,100)
  Spike.s2 = createSprite(5200,800-(spikes[2].height/2),2000,(spikes[2].height))
    spike.add(Spike.s2)
   Spike.s2.addImage(spikes[2])
  
  deathWall1 = createSprite(5200,0-Benson.height,4800,5)
  deathWall1.depth = 0.5
  deathWall2 = createSprite(5250,400,4800,5)
  deathWall2.depth = 0.6
  
  
           sbox[9].resize(1300,37)
  Platform.p8 = createSprite(6650,800+(37/2),1300,37)
    platform.add(Platform.p8)
   Platform.p8.addImage(sbox[9])
  
   sbox1[3].resize(30,37)
  TPlatform.t3 = createSprite(2400,55,30,37)
  tplatform.add(TPlatform.t3)
  TPlatform.t3.addImage(sbox1[3])
  
  sbox[10].resize(30,37)
  Platform.p9 = createSprite(2200,-200+(37/2),30,37)
  platform.add(Platform.p9)
  Platform.p9.addImage(sbox[10])

  sbox[11].resize(30,37)
  Platform.p10 = createSprite(1800,-300+(37/2),30,37)
  platform.add(Platform.p10)
  Platform.p10.addImage(sbox[11])
  thingAtBegining.add(Platform.p10)
  

  sbox[12].resize(300,37)
  Platform.p11 = createSprite(1400,-400+(37/2),300,37)
  platform.add(Platform.p11)
  Platform.p11.addImage(sbox[12])
    thingAtBegining.add(Platform.p11)

  sbox[13].resize(100,37)
  Platform.p12 = createSprite(800,-400+(37/2),300,37)
  platform.add(Platform.p12)
  Platform.p12.addImage(sbox[13])
    thingAtBegining.add(Platform.p12)
  
  sbox[14].resize(100,37)
  Platform.p13 = createSprite(400,-450+(37/2),300,37)
  platform.add(Platform.p13)
  Platform.p13.addImage(sbox[14])
    thingAtBegining.add(Platform.p13)
  
  sbox[15].resize(50,37)
  Platform.p14 = createSprite(25,-450+(37/2),50,37)
  platform.add(Platform.p14)
  Platform.p14.addImage(sbox[15])
  
    sbox[15].resize(30,37)
  Platform.p14 = createSprite(2400,-400+(37/2),30,37)
  platform.add(Platform.p14)
  Platform.p14.addImage(sbox[15])
  
    sbox[16].resize(30,37)
  Platform.p15 = createSprite(2600,-600+(37/2),30,37)
  platform.add(Platform.p15)
  Platform.p15.addImage(sbox[16])
  
    sbox[17].resize(30,37)
  Platform.p16 = createSprite(3000,-600+(37/2),30,37)
  platform.add(Platform.p16)
  Platform.p16.addImage(sbox[17])

   spikes[3].resize(30,30)
  Spike.s3 = createSprite(3300,-600-(spikes[3].height/2),30,30)
  spike.add(Spike.s3)
  Spike.s3.addImage(spikes[3])
  
      sbox[18].resize(30,37)
  Platform.p17 = createSprite(3100,-600+(37/2),30,37)
  platform.add(Platform.p17)
  Platform.p17.addImage(sbox[18])

      sbox[19].resize(30,37)
  Platform.p18 = createSprite(3700,-600+(37/2),30,37)
  platform.add(Platform.p18)
  Platform.p18.addImage(sbox[19])
  
      sbox[20].resize(5,300)
  Platform.p19 = createSprite(7600-3,-600+177,5,300)
  platform.add(Platform.p19)
  Platform.p19.addImage(sbox[20])
  
  Platform.p20 = createSprite(7800-3,-600+177,5,300)
  platform.add(Platform.p20)
  Platform.p20.addImage(sbox[20])
  
      sbox[21].resize(200,37)
  Platform.p21 = createSprite(7900,-600+(37/2),200,37)
  platform.add(Platform.p21)
  Platform.p21.addImage(sbox[21])
  
    sbox[22].resize(windowWidth/2,37)
  Platform.p22 = createSprite(8000+windowWidth,800+(37/2),300,(37))
    platform.add(Platform.p22)
   Platform.p2.addImage(sbox[22])
  
      sbox[23].resize(30,37)
  Platform.p23 = createSprite(4000,-400+(37/2),30,37)
  platform.add(Platform.p23)
  Platform.p23.addImage(sbox[23])

      
  TPlatform.t30 = createSprite(4250,-600+(37/2),100,37)
  tplatform.add(TPlatform.t30)
  // removeSprite(Platform.p30)
  
        sbox[24].resize(300,37)
  Platform.p24 = createSprite(4650,-400+(37/2),300,37)
  platform.add(Platform.p24)
  Platform.p24.addImage(sbox[24])
  
          sbox[25].resize(400,37)
  Platform.p25 = createSprite(5200,-600+(37/2),400,37)
  platform.add(Platform.p25)
  Platform.p25.addImage(sbox[25])
  
       sbox[26].resize(600,37)
  Platform.p26 = createSprite(5900,-600+(37/2),400,37)
  platform.add(Platform.p26)
  Platform.p26.addImage(sbox[26])
  
       sbox[27].resize(600,37)
  Platform.p27 = createSprite(6600,-600+(37/2),400,37)
  platform.add(Platform.p27)
  Platform.p27.addImage(sbox[27])
  
         sbox[27].resize(600,37)
  Platform.p27 = createSprite(7300,-600+(37/2),400,37)
  platform.add(Platform.p27)
  Platform.p27.addImage(sbox[27])



}

  
  
function levelDynamics() {
  useQuadTree(true)
desertText()
  if (Benson.collide(Platform.p23)) {
  Benson.addSpeed(Benson.Velocity.y,-Benson.getDirection())
  }
  // if (Platform.p17.velocity.x >5) { Platform.p17.velocity.x = 0}
  if (Platform.p17.position.x < 3600) {
  Platform.p17.velocity.x++

  }
  if (Platform.p17.position.x > 3100) {
  Platform.p17.velocity.x--
   
  } 
if (touched == true) {
  deathWall.add(deathWall1)
  deathWall.add(deathWall2)
} else {
  deathWall.remove(deathWall1)
  deathWall.remove(deathWall2)
}

    if (notTouchedAtStart == true) {
      Platform.p10.visible = true
      Platform.p11.visible = true
      Platform.p12.visible = true
      Platform.p13.visible = true
      if (Benson.position.x > 200 && Benson.position.x < 800) {
  text("Ok so this time remember to take the hard side",200,400)
      }
      if (Benson.position.x > 2000 && Benson.position.x < 2400) {
  text("It's this way",2000,-400)
  makeArrow(2150,-400,2000,-400)
      }
  } else {
    Platform.p10.visible = false
    Platform.p11.visible = false
    Platform.p12.visible = false
    Platform.p13.visible = false
  }
  if (deathFault == 'Benson was impailed by spikes.' && !notTouchedAtStart) {
  if (Benson.position.x > 200 && Benson.position.x < 800) {
  text("Oh yeah, look out for the spikes. Forgot to warn you.",200,400)
  }
  text("SPIKES",2800,0)
    let spi = font.textBounds("SPIKES", 280,0,32)
    makeArrow(2900,0,2950,50)
  }
  if (Benson.position.x > 7400 && Benson.position.x < 7800) {
    text("Well, thanks for playing my silly little game!", 7600,-1000,400)
  }  
  if (Benson.position.x > 850 && Benson.position.x < 1384) {
    text("Don't fall in the quicksand!", 910,575,300,300)
  }
 if (Benson.position.x > 3900 && Benson.position.x < 4500) {
    text("There's no possible way to make this jump so don't try.", 4200,-575,300)
  }
   if (Benson.position.x > 5200 && Benson.position.x < 5700) {
    text("Actually this is the easiest route.", 5200,-800)
  }


   if (Benson.position.x > 1384 && Benson.position.x < (2075)) {
     tplatform.add(TPlatform.t2)
    text("There's actually a platform here.", (1384+ 1384/5),610-(sbox[4].height),500,300)
  } else {tplatform.remove(TPlatform.t2)}

    
  
  //makes platforms enterable from the bottom
  if (Benson.height/2+Benson.position.y <= TPlatform.t1.position.y) {
    tplatform.add(TPlatform.t1)
  } else {
  tplatform.remove(TPlatform.t1)
  }
    if (Benson.height/2+Benson.position.y <= TPlatform.t2.position.y) {
    tplatform.add(TPlatform.t2)
  } else {
  tplatform.remove(TPlatform.t2)
  }
    if (Benson.height/2+Benson.position.y <= TPlatform.t3.position.y) {
    tplatform.add(TPlatform.t3)
  } else {
  tplatform.remove(TPlatform.t3)
  }
  if (Benson.height/2+Benson.position.y <= TPlatform.t30.position.y) {
    tplatform.add(TPlatform.t30)
  } else {
  tplatform.remove(TPlatform.t30)
  }
  
    if (Benson.position.x > 3650 && Benson.position.x < 4500) {
    text("Ok so this is the easy side. You sure you don't want a challenge?", 3700,600)
  }
    if (Benson.position.x > 5200 && Benson.position.x < 5900) {
    text("Not even a little one? Fine but you'll regret this.", 5300,600)
  }
  
    if (!touched && Benson.position.x > 7600 && Benson.position.x < 7800) {
    text("HAH! Not yet, you missed something all the way back at the start. Told you you'd regret not taking the hard way.", 7500,200,300,250)
      notTouchedAtStart = true
      
  }
    if (Benson.position.x > 2500 && Benson.position.x < 2900) {
    text("Hard way", 2600,0)
      makeArrow(2740,0,2700,-50)
    text("Easy way", 2600,50)
      makeArrow(2730,50, 2790, 100)
  }

  
    if (Benson.position.x > -10 && Benson.position.x < 200) {
      if (!touched) {
    text("Yeah this is it. just touch it and you can win.", 0,-1000,400)
  } else {text("Just head back to the pole now. Yes it actually was that easy.", 0,-1000,400)}
    }
}
  
  
function spawnPole() {
drawSprite(winPole)
drawSprite(winPole2)
}

function desertText() {
 textSize(32)
    textWrap(WORD)
    fill(34,23,54)
    textFont('font')
}

function makeArrow(bx,by,ex,ey) {
    line(bx, by, ex, ey); //draw a line beetween the vertices
    push() //start new drawing state
    stroke(0);
    // this code is to make the arrow point
    var angle = atan2(by - ey, bx - ex); //gets the angle of the line
    translate(ex, ey); //translates to the destination vertex
    rotate(angle-90); //rotates the arrow point
    triangle(-10*0.5, 10, 10*0.5, 10, 0, -10/2); //draws the arrow point as a triangle
    pop();
    
}
