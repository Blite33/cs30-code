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
// Later note: This is actually useful if the user resizes window?
let arrayWidth, arrayHeight;

let numberStartXOffset, numberStartYOffset;

let secondHelper = 0;

let whatTheTimeIs = [0,0,0,0];

function preload() {
  number9 = loadStrings('assets/9.txt')
  number8 = loadStrings('assets/8.txt')
  number7 = loadStrings('assets/7.txt')
  number6 = loadStrings('assets/6.txt')
  number5 = loadStrings('assets/5.txt')
  number4 = loadStrings('assets/4.txt')
  number3 = loadStrings('assets/3.txt')
  number2 = loadStrings('assets/2.txt')
  number1 = loadStrings('assets/1.txt')
  number0 = loadStrings('assets/0.txt')
  numberColon = loadStrings('assets/colon.txt')
}

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
  placeNumbersInGrid();
  whatIsTheTime();
  
  // // This time check misses out on the entire thing!!!
  // if(millis() % 1000 === 0){
  //   whatIsTheTime();
  // }
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

// function mousePressed() {
//   // if mouseX.floor and mouseY.floor are within gridBlockLocation. (maybe divide by the gridHeight and then floor it.)
//   let newMouseX = Math.floor(mouseX/(windowHeight/arrayHeight)); //Assumes height
//   let newMouseY = Math.floor(mouseY/(windowHeight/arrayHeight)); //Assumes height is the bigger of the two
//   if(grid[newMouseY][newMouseX] === 'white'){
//     grid[newMouseY][newMouseX] = 'black';
//   }
//   else{
//     grid[newMouseY][newMouseX] = 'white';
//   }
//   console.log("Mouse Position:", newMouseX, newMouseY);
// }

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

function whatIsTheTime() {
  secondHelper++;
  if(secondHelper % 30 === 0){ // The value needs to change based on the refresh rate (60hz >> 30, 120hz >> 60)
    // Please find a less fucky way to do this!! There's probably a way to find when a second has passed.
    // ALSO GOD FORBID YOU USE MILLIS(), GET THAT STUFF OUTTA YOUR MIND
    console.log(whatTheTimeIs);
    for(let i=0; i<4; i++){
      if(whatTheTimeIs[i] > 9){
        whatTheTimeIs[i] = 0
        whatTheTimeIs[i-1]++;
      }
    }
    whatTheTimeIs[3]++;
  }
}

function placeNumbersInGrid() {
  // we need someplace to place our numbers down.
  numberStartXOffset = 1;
  numberStartYOffset = 1;

  displayNumbers(whatTheTimeIs[0]);
  numberStartXOffset += whatTheTimeIs[0].length-1;

  displayNumbers(whatTheTimeIs[1])
  numberStartXOffset += whatTheTimeIs[0].length-1;

  displayNumbers(numberColon);
  numberStartXOffset += numberColon.length-4;

  displayNumbers(whatTheTimeIs[2]);
  numberStartXOffset += whatTheTimeIs[2].length-1;

  displayNumbers(whatTheTimeIs[3]);

  //Make a for loop?
  
}

function displayNumbers(numberDisplayed) {
  // Map text file array to grid. Mode of displaying numbers.
  for(let y=0; y<numberDisplayed.length; y++){
    for(let x=0; x<numberDisplayed[y].length; x++){
      if(numberDisplayed[y][x] === '0'){
        grid[y+numberStartYOffset][x+numberStartXOffset] = 'white'
      }
      else if(numberDisplayed[y][x] === '-'){
        grid[y+numberStartYOffset][x+numberStartXOffset] = 'black'
      }
    }
  }
}