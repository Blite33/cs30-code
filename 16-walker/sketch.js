// Oop walker demo
// william harris
// monday apr 17 2023

class Walker {
  constructor(x,y,color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = 5;
    this.size = 5;
  }

  display() {
    fill(this.color);
    noStroke;
    circle(this.x, this.y, this.size);
  }

  move() {
    let choice = random(100);
    if (choice < 25) {
      //up
      this.y -= this.speed;
    }
    else if (choice < 50) {
      //down
      this.y += this.speed;
    }
    else if (choice < 75) {
      //left
      this.x -= this.speed;
    }
    else if (choice < 100) {
      //right
      this.x += this.speed;
    }
  }
}

let kevin;
let wasi;

function setup() {
  createCanvas(windowWidth, windowHeight);
  kevin = new Walker(width/2, height/2, 'green');
  wasi = new Walker(200, 400, 'blue');
}

function draw() {
  kevin.move();
  kevin.display();
  wasi.move();
  wasi.display();
}
