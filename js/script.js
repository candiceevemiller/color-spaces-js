let WIDTH = window.innerWidth;
let HEIGHT = window.innerHeight;

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

// TODO add timeout function so it draws slower
function randomWalk() {
    // Constants
    let STEP_SIZE = 5;
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
    let direction = getRandomIntInclusive(0,3);  // this always returns 0,1,2,or 3
    let hueDirection = getRandomIntInclusive(0,1);  // this always returns 0 or 1
    
    // update values for next circle
    switch (direction) {
        case 0:
            cX -= STEP_SIZE; // move left
            break;
        case 1:
            cX += STEP_SIZE; // move right
            break;
        case 2:
            cY -= STEP_SIZE; // move up
            break;
        case 3:
            cY += STEP_SIZE; // move down
            break;
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
// noLoop(); // p5 will loop code in draw() infinitely without this (commented out because I want it to now that it works)
}

function draw() {
    randomWalk();
}