let dumpwalk, dumpidle, dumpjump, slep, wake, soup, scene, eightbitdragon;
let winscreen, losescreen;
let xpos, yposup, yposdown, xspeed, yspeed;
var count = 0;
function preload() {
  scene = loadImage('scene.jpg');
  dumpwalk = createImg("dumpwalk.gif", "");
  dumpidle = createImg("dumpidle.gif", "");
  dumpjump = createImg("dumpjump.gif", "");
  wake = createImg("wak.gif", "");
  // slep = createImg("slep.gif", "");
  eightbitdragon = loadFont('eight-bit-dragon.otf');
  // soup = loadImage('soup.png');
  winscreen = loadImage('winbackground.jpg');
  losescreen = loadImage('losebackground.jpg');
}
function setup() {
	createCanvas(1400, 700);
  xpos = 0;
  yposup = -8000;
  yposdown = 700;
  xspeed = 10;
  yspeed = 100;
}
function draw() {
  image(scene, xpos, 0);
  scene.resize(0, 700);
  image(winscreen, 0, yposup);
  winscreen.resize(1400, 0);
  image(losescreen, 0, yposdown);
  losescreen.resize(1400, 0);
  idle();
  if (keyIsDown(RIGHT_ARROW)) {
    xpos = xpos - xspeed;
    walk();
  }
  if (xpos <= -12500) {
    xspeed = 0;
    idle();
  }
  if (keyIsDown(UP_ARROW)) {
    jump();
  }
  if (key === 'a' || key === 'A') {
    count = count + 1;
  }
  if (key === 'b' || key === 'B') {
    count = count - 1;
  }
  if (key === 'e' || key === 'E') {
    dragonwakes();
  }
  if (key === 'n' || key === 'N') {
    dragonjudges();
  }
  if (key === 'y' || key === 'Y') {
    won();
  }
  if (key === 'z' || key === 'Z') {
    lose();
  }
}
function walk() {
  wake.hide();
  dumpjump.hide();
  dumpidle.hide();
  dumpwalk.show();
  dumpwalk.position(350, 495);
}
function idle() {
  wake.hide();
  dumpjump.hide();
  dumpwalk.hide();
  dumpidle.show();
  dumpidle.position(350, 500);
}
function jump() {
  wake.hide();
  dumpidle.hide();
  dumpwalk.hide();
  dumpjump.show();
  dumpjump.position(345, 410);
}
function dragonwakes() {
  wake.show();
  wake.position(650, 100);
  textSize(30);
  textFont(eightbitdragon);
  fill(0);
  noStroke();
  text('Young Traveler! I have been watching your journey and now that you have arrived, I will judge you.', (width/2) - 500, (height/2) - 100, 400, 400);
  textSize(15);
  text('press n to continue', (width/2) - 500, (height/2) + 100, 400, 100);
}
function dragonjudges() {
  wake.show();
  wake.position(650, 100);
  textSize(30);
  textFont(eightbitdragon);
  fill(0);
  noStroke();
  if (count >= 3) {
    text('You are true of the heart. Your compassion has no bounds. You have succeeded in your journey.', (width/2) - 500, (height/2) - 100, 400, 400);
    textSize(15);
    text('hold y to start your next journey', (width/2) - 500, (height/2) + 125, 400, 100);
  }
  // else if (count >= 1 && count <= 2) {
  //   text('Your journey has been meaningful to you, but you still have much to learn. Keep this in your heart as you continue with your life', (width/2) - 500, (height/2) - 250, 400, 400);
  // }
  else if (count <= 0) {
    text('You have failed your journey and have learned nothing of the world. You will not have a second chance. I hope you learn more in the afterlife than you did on Earth.', (width/2) - 600, (height/2) - 250, 400, 400);
    textSize(15);
    text('hold z to start your next journey', (width/2) - 600, (height/2) + 100, 400, 100);
  }
}
function won() {
  dumpidle.show();
  dumpwalk.hide();
  dumpjump.hide();
  if (keyIsDown(89)) {
    yposup = yposup + yspeed;
  }
  if (yposup >= 0) {
    yspeed = 0;
  }
}
function lose() {
  dumpidle.show();
  dumpwalk.hide();
  dumpjump.hide();
  if (keyIsDown(90)) {
    yposdown = yposdown - yspeed;
  }
  if (yposdown <= -7300) {
    yspeed = 0;
  }
}
