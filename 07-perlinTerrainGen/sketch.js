// 2D Perlin Noise Terrain Generation
// Bill
// March 14th 2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let time = 0;
let horiz = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnRectangles()
}

function draw() {
  background(220);
  for(let i=0; i<terrain.length; i++){
    rect(terrain[i].x, height - terrain[i].height, 1, terrain[i].height)
  }

}

function spawnRectangles() {
  for (let x=0; x<2000; x++) {
    let h = noise(time) * height;
    let thisRect = {
      x:x,
      height:h,
    }
    terrain.push(thisRect);
    time += 0.05
  }
}
