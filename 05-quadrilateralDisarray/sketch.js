// Quadrilateral Disarray
// March 7 2023

let boxes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnBox(width/2, height/2, 50, 0);
  rectMode(CENTER);

  for(let y = 0; y < height; y += 50){
    for(let x = 0; x < width; x += 50){
      spawnBox(x, y, 50, random(y*0.001))
    }
  }
}

function draw() {
  background(220);
  displayBox(boxes[0]);

  for(let i=0;i<boxes.length;i++){
    displayBox(boxes[i]);
  }
}

function spawnBox(theX, theY, theSize, rotation) {
  let someBox = {
    x: theX,
    y: theY,
    size: theSize,
    rotation: rotation,
  }
  boxes.push(someBox)
}

function displayBox(myBox){
  push()
  translate(myBox.x, myBox.y);
  rotate(myBox.rotation);
  square(0,0,myBox.size);
  pop()
}