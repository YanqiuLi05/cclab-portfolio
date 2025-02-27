let myFont;
let textPoints = [];
let myCustomPoints = [];
let myCustomPoints2 = [];
let fontSize = 60;
let pointSize = 5;
let offX = -5;
let offY = 5;
let flowSpeed = 0.02; 
let flowHeight = 10;  

function preload() {
  myFont = loadFont("zawijasy.otf");
}

function setup() {
  createCanvas(400, 400);
  textPoints = myFont.textToPoints("ICE CREAM", 40, 220, fontSize, { sampleFactor: 0.4 });

  for (let i = 0; i < textPoints.length; i++) {
    myCustomPoints.push(new CustomPoint(textPoints[i].x, textPoints[i].y, pointSize, true));  
    myCustomPoints2.push(new CustomPoint(textPoints[i].x + offX, textPoints[i].y + offY, pointSize, false)); 
  }
}

function draw() {
  //background(64,64,64);
  clear()

  for (let i = 0; i < myCustomPoints2.length; i++) {
    myCustomPoints2[i].update();
    myCustomPoints2[i].display();
  }

  for (let i = 0; i < myCustomPoints.length; i++) {
    myCustomPoints[i].update();
    myCustomPoints[i].display();
  }
}

class CustomPoint {
  constructor(x, y, size, isColorChanging) {
    this.xBase = x;
    this.yBase = y;
    this.size = size;
    this.isColorChanging = isColorChanging;

    this.color = isColorChanging ? this.randomColor() : [0, 0, 0];
    this.colorChangeTime = random(1, 3);
    this.colorTimer = 0;
  }

  update() {
    if (this.isColorChanging) {
      this.colorTimer += deltaTime / 1000;
      if (this.colorTimer >= this.colorChangeTime) {
        this.color = this.randomColor();
        this.colorTimer = 0;
        this.colorChangeTime = random(1, 3);
      }
    }

    this.y = this.yBase + sin(frameCount * flowSpeed) * flowHeight;
  }

  display() {
    fill(this.color[0], this.color[1], this.color[2]);
    noStroke();
    ellipse(this.xBase, this.y, this.size, this.size);
  }

  randomColor() {
    return [random(100, 255), random(100, 255), random(100, 255)];
  }
}
