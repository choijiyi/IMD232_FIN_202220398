let circles = [];

// let canvaswidth = 300;
// let canvasheight = 200;
let speed = 0.08;
let current = [];
let waveY = [];
let max = Math.random() * 100 + 250;
let y1 = 0;
let y2 = 0;
let counter = 3;

function setup() {
  setCanvasContainer('canvas', width, height, true);
  noStroke();
  
  colorMode (RGB, 250, 250, 250, 1);
  
  this. r = random(0);
  this. g = random(100, 150);
  this. b = random(100, 200);
  this. a = random(0.05, 0.5);
  
  background('white');
}

function draw() {
  background('white');
  
  for (let i = circles.length - 1; i >= 0; i--) {
    circles[i].update();
    circles[i].display();
    
    if (circles[i].y < 0) {
      circles.splice(i, 1);
    }
  }
  
  if(mouseIsPressed) {
    let diameter = random(10, 30);
    let x = mouseX;
    let y = mouseY;
    let speed = random(2, 10);
    let acc = 0.1;
    
    let circle = new Circle(x, y, diameter, speed, acc);
    circles.push(circle);
  }
  
  for (let i = 0; i < counter + 2; i++) {
    current.push(i);
  } 
  
  if (mouseIsPressed) {
    current = current.map(function (currentrentValue) {
      return currentrentValue + speed;
    });
  }
  
  endY = height / 1.5; 
  
  for (let a = 0; a < counter; a++) {
    for (let b = 0; b < 4; b++) {
      if (b % 2 == 0) {
        waveY.push(endY + sin(current[a + b]) * (max + 300));
      } else {
        waveY.push(endY + sin(current[a + b]) * max);
      }
    }
  } 
  
  function Wave(index) {
    cx1 = ((width / 5) * 3) / 2; 
    cx2 = ((width / 5) * 5) / 2;
    y1 = 4 * (index-1);
    y2 = 2 + 4 * (index-1);
    fill(this.r, this.g, this.b, this.a);
    smooth();
    beginShape();
    vertex((width / 5) * 0, endY);
    bezierVertex(cx1, waveY[y1], cx2, waveY[y2], (width / 5) * 5, endY);
    vertex((width / 5) * 5, height); 
    vertex((width / 5) * 0, height); 
    endShape(CLOSE);
  }
  
  Wave(1);
  Wave(2);
  Wave(3);
  
  waveY = [];
}