let myFont;
let textPoints = [];
let myCustomPoints = [];
let fontSize = 60;
let pointSize = 5;
let moveSpeed = 1; 


function preload() {
  myFont = loadFont("zawijasy.otf");
}

function setup() {
  createCanvas(400, 400);
  textPoints = myFont.textToPoints("ICE CREAM", 40, 220, fontSize, { sampleFactor: 0.4 });

  for (let i = 0; i < textPoints.length; i++) {
    myCustomPoints.push(new CustomPoint(textPoints[i].x, textPoints[i].y, pointSize));
  }
}

function draw() {
  background("#FFEB3B");

  for (let i = 0; i < myCustomPoints.length; i++) {
    myCustomPoints[i].update();
    myCustomPoints[i].display();
  }
}

class CustomPoint {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    
  }

  update() {
    this.x += moveSpeed;

    
    if (this.x > width + this.size) {
      this.x = -this.size;
    }
  }

  display() {
    fill("orange");
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);
  }
}
