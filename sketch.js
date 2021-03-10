var inc = 0.1;
var inc2 = 0.2;
var start = 0;

function setup() {
  createCanvas(1200, 300);
}

function vibracaoMenor() {
  var xoff = start;
  beginShape();

  for (var x =0; x < width; x++) {
    stroke(255, 255, 255)
    var y = noise(xoff) * 20;
    vertex(x, 100 + y);
    xoff += inc2;
  }
  endShape();

  start += inc;
}

function vibracaoMaior() {
  var xoff = start;
  beginShape();

  for ( var x = 0; x < width; x++) {
    stroke(255, 255, 255);
    // var y = random(height)
    var y = noise(xoff) * height;
    vertex(x, y);
    xoff +=inc;
  }
  endShape();

  start += inc;
}


function draw() {
  frameRate(1000);
  textSize(70);
  textAlign(LEFT);
  background(0);
  stroke(255);
  noFill();
  if (mouseIsPressed) {
    vibracaoMenor()
    if (frameCount <= 268370) {
      frameCount
    }
    text(frameCount , 0, 200);
    text("mortos por COVID no Brasil", 250, 200)
  } else {
    vibracaoMaior()
  }


}




