// Bouncing Balls demo
// using arrays and object notation

let shapes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnBall(width/2, height/2);
}

function draw() {
  background(220);
  moveShapes();
  displayShapes();
  if (mouseIsPressed) {
    spawnBall(mouseX, mouseY)
  }
}

function moveShapes() {
  for (let i=0; i<shapes.length; i++) {
    shapes[i].x += shapes[i].dx;
    shapes[i].y += shapes[i].dy;
    if(shapes[i].x < 0 || shapes[i].x > windowWidth){
      shapes[i].dx = -1 * shapes[i].dx
      //flip the speed direction
    }
    if(shapes[i].y < 0 || shapes[i].y > windowHeight){
      shapes[i].dy = -1 * shapes[i].dy
    }
  }
}

function displayShapes() {
  for (let i=0; i<shapes.length; i++) {
    fill(shapes[i].theColor);
    circle(shapes[i].x, shapes[i].y, shapes[i].diameter);
  }
}

function spawnBall(tempX, tempY) {
  let newBall = {
    x: tempX,
    y: tempY,
    dx: random(-5, 5),
    dy: random(-5, 5),
    diameter: random(25,100),
    theColor: color(random(255), random(255), random(255))
  };
  shapes.push(newBall);
}