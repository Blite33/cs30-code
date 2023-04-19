// Ball array oop
// William harris
// apr19/2023

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dx = random(-50,50);
    this.dy = random(-50,50);
    this.radius = random(10,35)
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.alpha = random(100,255);
  }

  display() {
    noStroke();
    fill(this.r, this.g, this.b, this.alpha);
    circle(this.x, this.y, this.radius*2)
  }

  update() {
    //move
    this.x += this.dx;
    this.y += this.dy;

    //bounce
    if(this.x < 1 + this.radius || this.x > windowWidth - this.radius){
      this.dx *= -1;
    }

    if(this.y < 1 + this.radius || this.y > windowHeight - this.radius){
      this.dy *= -1;
    }
  }

  collision(otherBall) {
    let distanceApart = dist(this.x, this.y, otherBall.x, otherBall.y)
    let radiiSum = this.radius + otherBall.radius;

    if(distanceApart < radiiSum) {

      //this.dy *= -1;
      //this.dx *= -1;

      let tempX = this.dx;
      let tempY = this.dy;

      this.dx = otherBall.dx;
      this.dy = otherBall.dy;
      otherBall.dx = tempX;
      otherBall.dy = tempY;
    }
  }
}

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  for (let someBall of ballArray) {
    someBall.update();
    for (let otherBall of ballArray) {
      if(someBall !== otherBall){
        someBall.collision(otherBall)
      }
    }
    someBall.display();
  }
}

function mousePressed() {
  let ball = new Ball(mouseX,mouseY);
  ballArray.push(ball);
}
