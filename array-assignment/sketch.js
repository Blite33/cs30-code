// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// IDEAS:
// Make a stupid thing that uses other people's code to randomize some art i guess
// - Use shellenbergs repository for the lols
//  

let allTheShapes = [];
let shapeInfo = {};
let shapeTypes = ['circle', 'square'];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Use the website
  // These will be randomly generated in the future
  // put this in a for loop.

  for(let i = 0; i < 50; i++){
    shapeInfo = {
      shapeType: random(shapeTypes), //New thing: If you put an array within a p5js random, you get a random part of the array
      shapeSize: noise(i) * 40,
      shapeColor: [random(255), random(115) + 140, random(255)],
      shapeLocation: [random(width), random(height)]
    }
    allTheShapes.push(shapeInfo);
  }

}

function draw() {
  for(let i = 0; i < allTheShapes.length; i++){
    if(allTheShapes[i].shapeType === 'circle'){
      drawCircle(i);
    }
    if(allTheShapes[i].shapeType === 'square'){
      drawRectangle(i);
    }
  }
}

function drawRectangle(i){
  fill(allTheShapes[i].shapeColor);
  rect(allTheShapes[i].shapeLocation[0], allTheShapes[i].shapeLocation[1], allTheShapes[i].shapeSize)
}

function drawCircle(i){
  fill(allTheShapes[i].shapeColor);
  circle(allTheShapes[i].shapeLocation[0], allTheShapes[i].shapeLocation[1], allTheShapes[i].shapeSize);
}
