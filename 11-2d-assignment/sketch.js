// IDK Yet
// William Harris
// March 23rd 2023
// latest v28/03/23
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Goals:
// Get 2d grid set up
// maybe game of life with some extra rules
// - Like having a harm block
// - Don't take to much inspiration from the youtube video
// Maybe implement a 2d version of the Dilithium vector encryption.
// A* algorithm sounds pretty good
// - Rewatch the 3Blue1Brown video?
// - Actually, it's https://www.youtube.com/watch?v=A60q6dcoCjw
// Make a graphing calculator? That sounds a little complicated.

let grid = [];

// I don't define these as constants just in case I ever redefine them.
let arrayWidth;
let arrayHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  arrayWidth = 30
  arrayHeight = 30

  grid = createEmpty2DArray(arrayWidth, arrayHeight);
}

function draw() {
  background(220);
  // Map the grid/2d array to the window
  drawGrid(grid);
}

function drawGrid(grid) {
  // Remember that in order to map everything from the grid, you must use whichever dimension is smaller:
  // 'windowWidth' vs 'windowHeight'
  // windowHeight / arrayHeight >>> gridBlockHeight?
  let gridBlockHeight = windowHeight / arrayHeight;
  for(let y=0; y<arrayHeight; y++){
    for(let x=0; x<arrayWidth; x++){
      fill(grid[y][x])
      rect((gridBlockHeight)*x, (gridBlockHeight)*y, (gridBlockHeight)*(x+1), (gridBlockHeight)*(y+1))
    }
  }
}

function mousePressed() {
  // if mouseX.floor and mouseY.floor are within gridBlockLocation. (maybe divide by the gridHeight and then floor it.)
  let newMouseX = Math.floor(mouseX/(windowHeight/arrayHeight)); //Assumes height
  let newMouseY = Math.floor(mouseY/(windowHeight/arrayHeight)); //Assumes height is the bigger of the two
  if(grid[newMouseY][newMouseX] === 'white'){
    grid[newMouseY][newMouseX] = 'black';
  }
  else{
    grid[newMouseY][newMouseX] = 'white';
  }
  console.log("Mouse Position:", newMouseX, newMouseY);
}

function createEmpty2DArray(arrayWidth, arrayHeight) {
  // Do i need an array that includes different objects?
  let blackGrid = [];

  for(let y=0; y<arrayHeight; y++){
    blackGrid.push([]);
    for(let x=0; x<arrayWidth; x++){
      blackGrid[y].push('black');
    }
  }
  return blackGrid;
}