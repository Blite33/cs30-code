// Fractal Circles -- first recursion visualization

let color = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  let theDepth = map(mouseX, 0, width, 0, 10);
  color += 0.1;
  if(color > 25){
    color = 0;
  }
  fractalCircle(width/2, width, theDepth, color);
}

function fractalCircle(x, diameter, depth) {
  //base case
  fill(color*depth);
  circle(x, height/2, diameter);
  if(depth > 0){
    depth--;
    //left side circle
    fractalCircle(x - diameter/4, diameter/2, depth);
    fractalCircle(x + diameter/4, diameter/2, depth);
  }
} 