var movers = [];

function setup() {
  createCanvas(windowWidth,500);
  noStroke();
  for (var i = 0; i < 30; i++) {
    movers[i] = new Mover(random(width),random(height));
  }
}

function draw() {
  background(17,28,45);
  for (var i = 0; i < movers.length; i++) {
    movers[i].update();
    movers[i].show();
  }
}
