
let angle = 0;
let angleV = 0;
let angleA = 0.001;

function setup() {
  background(50);
  createCanvas(500, 500);
  //circle = new Walker(width/2, height/2);
  angleMode(RADIANS);
}

function draw() {

  angleA = map(mouseX, 0, width, -0.01, 0.01);
  // let m = map(value, 0, 100, 0, width);
  // converts one value to antother 
  angleV = constrain(angleV, -0.2, 0.2);
  background(146, 83, 161);
  noStroke();
  fill(240, 99, 164);
  rectMode(CENTER);
  translate(width/2, height/2);
  rotate(angle);
  //console.log(angle);
  rect(0, 0, 128, 64);

  angle += angleV;
  angleV += angleA;
}