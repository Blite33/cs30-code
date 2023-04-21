// Clock. Just, just, - just, a clock.
// William Harris
// March 23rd 2023
// latest v20/04/23
//
// Extra for Experts:
// - Not a very big extra for experts, but I capped the framerate in order to fix a problem.

// Goals:
// Having my goals here was a mistake. Pure fantasies.

let grid = [];

// I don't define these as constants just in case I ever redefine them.
// Note from later: This is actually useful if the user resizes window?
let arrayWidth, arrayHeight;

let numberStartXOffset, numberStartYOffset;

// secondHelper is for the time.
let secondHelper = 0;
let whatTheTimeIs = [0,0,0,0];

function preload() {
  number9 = loadStrings('assets/9.txt');
  number8 = loadStrings('assets/8.txt');
  number7 = loadStrings('assets/7.txt');
  number6 = loadStrings('assets/6.txt');
  number5 = loadStrings('assets/5.txt');
  number4 = loadStrings('assets/4.txt');
  number3 = loadStrings('assets/3.txt');
  number2 = loadStrings('assets/2.txt');
  number1 = loadStrings('assets/1.txt');
  number0 = loadStrings('assets/0.txt');
  numberColon = loadStrings('assets/colon.txt');

  // This next one is a really annoying way of doing things, but it means that I can directly pass the numbers to parsers.
  numberArray = [number0, number1, number2, number3, number4, number5, number6, number7, number8, number9, numberColon];
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  arrayWidth = 30;
  arrayHeight = 30;

  grid = createEmpty2DArray(arrayWidth, arrayHeight);

  // Stupid badness here. This is a stupid fix to a stupid problem. Make my life easier.
  frameRate(60);
}

function draw() {
  background(220);
  // Map the grid/2d array to the window
  drawGrid(grid);
  whatIsTheTime();
  placeNumbersInGrid();
}

function drawGrid(grid) {
  // Parses the grid to display the grid using rectangles.

  /*
  Remember that in order to map everything from the grid, you must use whichever dimension is smaller:
  'windowWidth' vs 'windowHeight'
  windowHeight / arrayHeight >>> gridBlockHeight?
  Note from later: This 'sketch' competely ignores screens that are taller than are wide, but it doesn't matter for now.
  */
  let gridBlockHeight = windowHeight / arrayHeight;
  for(let y=0; y<arrayHeight; y++){
    for(let x=0; x<arrayWidth; x++){
      fill(grid[y][x])
      rect((gridBlockHeight)*x, (gridBlockHeight)*y, (gridBlockHeight)*(x+1), (gridBlockHeight)*(y+1))
    }
  }
}

// There used to be a mousePressed() function here.

function createEmpty2DArray(arrayWidth, arrayHeight) {
  // This function is used only once, to fill the grid with '0' so that javascript doesn't parse 'undefined'.

  // Do I need an array that includes different objects? No.
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
  // This function increments the time and keeps it within limits.

  secondHelper++;
  if(secondHelper % 30 === 0){
    /*
    The value above needs to change based on the refresh rate (60hz >> 30, 120hz >> 60)
    Please find a less [bad] way to do this!! There's probably a way to find when a second has passed.
    ALSO GOD FORBID YOU USE MILLIS(), GET THAT STUFF OUTTA YOUR MIND

    Note from later: I capped the frame rate at 30, soooooo that should work just fine. (line 48-49)
    */
    whatTheTimeIs[3]++;
    if(whatTheTimeIs[3] > 9){
      whatTheTimeIs[3] = 0;
      whatTheTimeIs[2]++;
    }
    if(whatTheTimeIs[2] > 5){
      whatTheTimeIs[2] = 0;
      whatTheTimeIs[1]++;
    }
    if(whatTheTimeIs[1] > 9){
      whatTheTimeIs[1] = 0;
      whatTheTimeIs[0] = 1;
    }
    if(whatTheTimeIs[0] === 1 && whatTheTimeIs[1] === 2){
      whatTheTimeIs[0] = 0;
      whatTheTimeIs[1] = 0;
    }
  }
}

function placeNumbersInGrid() {
  // Sends the numbers to the grid to be displayed.

  // We need someplace to place our numbers down. (These offset where numbers are placed, so they don't 'collide')
  numberStartXOffset = 1;
  numberStartYOffset = 1;

  displayNumbers(whatTheTimeIs[0]);
  numberStartXOffset += 5;

  displayNumbers(whatTheTimeIs[1]);
  numberStartXOffset += 5;

  // The issue was that displayNumbers() was being given numberColor, which is not an index of numberArray
  // Fixed by hard coding, which isn't the best, but it's not too bad. Life could be worse.
  displayNumbers(10);
  numberStartXOffset += 2;

  displayNumbers(whatTheTimeIs[2]);
  numberStartXOffset += 5;

  displayNumbers(whatTheTimeIs[3]);
  numberStartXOffset += 5;

  //Make a 'for' loop? Hmm... that would need an array with all the numbers, but with the colon in it already...
}

function displayNumbers(numberDisplayed) {
  // Map text file array to grid. Mode of displaying numbers.

  // This next line is not especially needed, but helped tremendously while fixing breaks.
  let numberToDisplay = numberArray[numberDisplayed];

  for(let y=0; y<numberToDisplay.length; y++){
    for(let x=0; x<numberToDisplay[y].length; x++){
      if(numberToDisplay[y][x] === '0'){
        grid[y+numberStartYOffset][x+numberStartXOffset] = 'white'
      }
      else if(numberToDisplay[y][x] === '-'){
        grid[y+numberStartYOffset][x+numberStartXOffset] = 'black'
      }
    }
  }
}