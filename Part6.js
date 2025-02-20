let myFont;
let textPoints = [];
let textPoints2 = [];
let myCustomPoints = [];
let myCustomPoints2 = [];
let fontSize = 140;
let pointSize = 8; 
let offX = -5;
let offY = 5;  

function preload() {
  myFont = loadFont("Sirukota.ttf");
}

function setup() {
  createCanvas(400, 400);


  textPoints = myFont.textToPoints("BAGEL", 40, 220, fontSize, { sampleFactor: 0.12 });

  for (let i = 0; i < textPoints.length; i++) {
    myCustomPoints.push(new CustomPoint(textPoints[i].x, textPoints[i].y, pointSize, true)); 
    myCustomPoints2.push(new CustomPoint(textPoints[i].x + offX, textPoints[i].y + offY, pointSize, false)); 
  }
}

function draw() {
  background(64,64,64); 

  
  for (let i = 0; i < myCustomPoints2.length; i++) {
    myCustomPoints2[i].display();
  }

  // Draw colorful layer
  for (let i = 0; i < myCustomPoints.length; i++) {
    myCustomPoints[i].update();
    myCustomPoints[i].display();
  }
}

class CustomPoint {
  constructor(x, y, size, isColorChanging) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.isColorChanging = isColorChanging;
    this.color = isColorChanging ? [255, 255, 255] : [0, 0, 0];
  }

  update() {
    if (this.isColorChanging) {
      let r = map(mouseX, 0, width, 50, 255);  
      let g = map(mouseY, 0, height, 50, 255); 
      let b = map(mouseX + mouseY, 0, width + height, 50, 255); 

      this.color = [r, g, b];
    }
  }

  display() {
    fill(this.color[0], this.color[1], this.color[2]);
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);
  }
}
