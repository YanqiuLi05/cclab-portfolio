let myFont;
let textPoints = [];
let myCustomPoints = [];
let fontSize = 60;
let pointSize = 5;

function preload() {
  myFont = loadFont("zawijasy.otf");
}

function setup() {
  createCanvas(400, 400);
  textPoints = myFont.textToPoints("ICE CREAM", 40, 150, fontSize, { sampleFactor: 0.4 });

  for (let i = 0; i < textPoints.length; i++) {
    myCustomPoints.push(new CustomPoint(textPoints[i].x, textPoints[i].y, pointSize));
  }
}

function draw() {
  background(64, 64, 64);
  clear();

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

    
    this.color = [random(100, 255), random(100, 255), random(100, 255)];

    this.fallSpeed = random(0.1, 0.2);
  }

  update() {
    this.y += this.fallSpeed;
  }

  display() {
    fill(this.color[0], this.color[1], this.color[2]);
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);
  }
}
