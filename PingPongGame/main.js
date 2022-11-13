var x;
var y;
var h;
var w;

var xspeed;
var yspeed;

var rx;
var ry;

var score;



function setup() {
  createCanvas(700, 750);

  x = 100;
  y = 30;
  h = 100;
  w = 10;

  xspeed = 10;
  yspeed = 10;
  

  rx = 600;
  ry = 300;
  
  score = 0;
  

}

function draw() {
  background(0);

  x = x + xspeed;
  y = y + yspeed;
  
  textSize(32);
  text('Score: ' + score, 10, 30);


  ellipse(x, y, 20, 20);

  if (x == 10 || x + 10 == width) {
    xspeed = xspeed * -1;
  }
  if (y == 10 || y + 10 == height) {
    yspeed = yspeed * -1;
  }
  if (x == 600 && y <= mouseY + 100 && y >= mouseY) {
    // yspeed = yspeed * -1;
    xspeed = xspeed * -1;
    score = score + 1;
    // xspeed = xspeed + 1;
    // yspeed = yspeed + 1;
  }

  rect(rx, mouseY, w, h);

  // if (keyCode === UP_ARROW) {
  //   ry = ry - 5;
  // } else if (keyCode === DOWN_ARROW) {
  //   ry = ry + 5;
  // }


  if (x + 10 == width) {
    xspeed = 0;
    yspeed = 0;
    textSize(40);
    text('Game Over. Double click to restart', 50, 300);
    fill(220);
  }
  
  

}

function doubleClicked() {
  setup();
}
