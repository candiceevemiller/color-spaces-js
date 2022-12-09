let WIDTH = window.innerWidth;
let HEIGHT = window.innerHeight;

// TODO add timeout function so it draws slower
function randomWalk() {
    // Constants
    let STEP_SIZE = 3;
    let NUM_STEPS = 10000;
    let RADIUS = 10;
    
    // Starting Values
    let cX = Math.floor(WIDTH / 2);
    let cY = Math.floor(HEIGHT / 2);
    let hue = 0;
    colorMode(HSB);

    for (let i=0; i < NUM_STEPS; i++) {  
      // draw circle
      noStroke(0);  
      fill(hue, 100, 100);
      circle(cX, cY, RADIUS);
      
      // Get random directions
      let direction = floor(random(5));  // this always returns 0,1,2,or 3
      let hueDirection = floor(random(2));  // this always returns 0 or 1
    
      // update values for next circle
      switch (direction) {
          case 0:
              cX -= STEP_SIZE; // move left
          case 1:
              cX += STEP_SIZE; // move right
          case 2:
              cY -= STEP_SIZE; // move up
          case 3:
              cY += STEP_SIZE; // move down
      }
    
      if (hueDirection === 1) {
          hue += STEP_SIZE;
      } else {
          hue -= STEP_SIZE;
      }
    
      // keep everything within bounds
      hue %= 360;  // HSV is a polar color space
      cX %= WIDTH;
      cY %= HEIGHT;
    }  
}

function setup() {
  createCanvas(WIDTH, HEIGHT);
  noLoop(); // p5 will loop code in draw() infinitely without this
}

function draw() {
    randomWalk();
}