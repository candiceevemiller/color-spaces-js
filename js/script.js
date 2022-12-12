let WIDTH = window.innerWidth;
let HEIGHT = window.innerHeight;

// Constants
let STEP_SIZE = 5;
let NUM_STEPS = 1;
let RADIUS = 10;

// Starting Values
let cX = Math.floor(WIDTH / 2);
let cY = Math.floor(HEIGHT / 2);
let hue = getRandomIntInclusive(0, 360);

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function randomWalk() {
    colorMode(HSB);
    
    for (let i=0; i < NUM_STEPS; i++) {  
    // draw circle
    noStroke(0);  
    fill(hue, 100, 100);
    setInterval(circle(cX, cY, RADIUS), 1000);
    
    // Get random directions
    let direction = getRandomIntInclusive(0,3);  // this always returns 0,1,2,or 3
    let hueDirection = getRandomIntInclusive(0,1);  // this always returns 0 or 1
    
    // update values for next circle
    switch (direction) {
        case 0:
            cX -= STEP_SIZE; // move left
            cX %= WIDTH;
            break;
        case 1:
            cX += STEP_SIZE; // move right
            cX %= WIDTH;
            break;
        case 2:
            cY -= STEP_SIZE; // move up
            cY %= HEIGHT;
            break;
        case 3:
            cY += STEP_SIZE; // move down
            cY %= HEIGHT;
            break;
    }
    
    if (hueDirection === 1) {
        hue += STEP_SIZE;
        hue %= 360;
        break;
    } else {
        hue -= STEP_SIZE;
        hue %= 360;
        break;
    }
    }  
}

function setup() {
createCanvas(WIDTH, HEIGHT);
background('#222222');
}

function draw() {
    randomWalk();
}