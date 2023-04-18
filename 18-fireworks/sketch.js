// Fireworks OOP
// William Harris
// apr 18 2023

class Spark {
  constructor(x, y, dx, dy, r, g, b, angle) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = r;
    this.g = g;
    this.b = b;
    this.alpha = 255;
    this.size = 10;
    this.angle = angle;
  }

  display() {
    noStroke();
    fill(this.r, this.g, this.b, this.alpha);
    circle(this.x, this.y, this.size);
  }

  update() {
    this.x += this.dx
    this.y += this.dy

    this.alpha--;
  }

  updateGravity() {

  }

  isDead() {
    return this.alpha<1;
  }
}

let sparkList = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnSpark();
  background(0);
}

function draw() {
  background(0,0,0,50);
  for(let i=sparkList.length-1; i>-1; i--){
    if (sparkList[i].isDead()){
      sparkList.splice(i, 1);
    }
  }
  for(let i=0; i<sparkList.length; i++){
    sparkList[i].update();
  }
  for(let i=0; i<sparkList.length; i++){
    sparkList[i].display();
  }
}

function mousePressed() {
  let r = random(100, 255);
  let g = random(100);
  let b = random(100);

  for (let i=0; i<360; i++){
    spawnSpark(r,g,b,i);
  }
}

function spawnSpark(r,g,b) {
  let dx = random(-5,5)
  let dy = random(-5,5)
  let theSpark = new Spark(mouseX, mouseY, dx, dy, r, g, b, i);
  sparkList.push(theSpark);
}