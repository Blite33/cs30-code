// Random Art
// William Harris
// March 19th
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// IDEAS:
// Make a stupid thing that uses other people's code to randomize some art i guess
// - Use shellenbergs repository for the lols

let allTheShapes = [];
let shapeInfo = {};
let shapeTypes = ['circle', 'square'];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for(let i = 0; i < 50; i++){
    shapeInfo = {
      shapeType: random(shapeTypes), //New thing: If you put an array within a p5js random, you get a random part of the array
      shapeSize: noise(i) * 40, //Shape Size: (r)
      shapeColor: [random(255), random(115) + 140, random(255)], //Shape Color: (r,g+,b)
      shapeLocation: [random(width), random(height)], //Shape Location: (x,y)
      shapeDirectionOffset: round(random(1)), //Used to check whether object moves perpendicular to others.
    }
    allTheShapes.push(shapeInfo);
  }
  noStroke()
}

// Main good thing about the draw loop is it's pretty small. Just one for loop for displaying everything.
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

// My dad suggested adding some way to add the amount of shapes on the screen. Variables are the same as in setup()
function mousePressed(){
  for(let i = 0; i < 10; i++){
    shapeInfo = {
      shapeType: random(shapeTypes),
      shapeSize: noise(i) * 40,
      shapeColor: [random(255), random(115) + 140, random(255)],
      shapeLocation: [random(width), random(height)],
      shapeDirectionOffset: round(random(1)),
    }
    allTheShapes.push(shapeInfo);
  }
}

// Oh my lord there is definitely a better way to do this next bit.
// Maybe I could set a variable equal to 'd' or whatever and use that later.
// I hate these giant nested if elses. I watched a video on why they're terrible and now I'm an expert.
function keyTyped() {
  if(key === 'd'){
    for(let i = 0; i < allTheShapes.length; i++){
      if(allTheShapes[i].shapeLocation[0] < width && allTheShapes[i].shapeDirectionOffset === 0){
        allTheShapes[i].shapeLocation[0] += 10;
      }
      else if(allTheShapes[i].shapeLocation[1] < height && allTheShapes[i].shapeDirectionOffset === 1){
        allTheShapes[i].shapeLocation[1] -= 10;
      }
      else if(!(allTheShapes[i].shapeLocation[0] < width) && allTheShapes[i].shapeDirectionOffset === 0){
        allTheShapes[i].shapeLocation[0] = 0;
      }
      else if(!(allTheShapes[i].shapeLocation[1] < height) && allTheShapes[i].shapeDirectionOffset === 1){
        allTheShapes[i].shapeLocation[1] = height;
      }
    }
  }
  if(key === 'w'){
    for(let i = 0; i < allTheShapes.length; i++){
      if(allTheShapes[i].shapeLocation[1] < height && allTheShapes[i].shapeDirectionOffset === 0){
        allTheShapes[i].shapeLocation[1] += 10;
      }
      else if(allTheShapes[i].shapeLocation[0] < width && allTheShapes[i].shapeDirectionOffset === 1){
        allTheShapes[i].shapeLocation[0] -= 10;
      }
      else if(!(allTheShapes[i].shapeLocation[1] < height) && allTheShapes[i].shapeDirectionOffset === 0){
        allTheShapes[i].shapeLocation[1] = 0;
      }
      else if(!(allTheShapes[i].shapeLocation[0] < width) && allTheShapes[i].shapeDirectionOffset === 1){
        allTheShapes[i].shapeLocation[0] = width;
      }
    }
  }
}