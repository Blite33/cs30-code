// 2D array Demo
// William Harris
// March 20th

// let grid = [[0, 0, 1, 1]
//             [1, 1, 0, 0]
//             [0, 1, 0, 1]
//             [1, 1, 1, 1]];

const ROWS = 4;
const COLS = 4;
let cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createRandomGrid(ROWS, COLS);

  if (width < height) {
    cellSize = width/ROWS;
  }
  else {
    cellSize = height/ROWS;
  }
}

function draw() {
  background(220);
  displayGrid();
}

function keyTyped() {
  if (key === 'r') {
    grid = createRandomGrid(ROWS, COLS);
  }
}

function displayGrid() {
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      if (grid[y][x] === 1) {
        fill("black");
      }
      else if (grid[y][x] === 0) {
        fill('white')
      }
      rect(x * cellSize, y * cellSize, cellSize, cellSize)
    }
  }
}

function createRandomGrid(ROWS, COLS) {
  let newGrid = [];
  for (let y = 0; y < ROWS; y++) {
    newGrid.push([]);
    for (let x = 0; x < COLS; x++) {
      newGrid[y].push(round(random(1 )));
    }
  }
  return newGrid;
}