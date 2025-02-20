let myFont;
let textPoints = [];
let myCustomPoints = [];
let fontSize = 140;

function preload() {
  myFont = loadFont("Sirukota.ttf");
}

function setup() {
  createCanvas(400, 400);

  textPoints = myFont.textToPoints("BAGEL", 50, 240, fontSize, { sampleFactor: 0.1 });

  for (let i = 0; i < textPoints.length; i++) {
    myCustomPoints.push(new CustomPoint(textPoints[i].x, textPoints[i].y));
  }
}

function draw() {
  background(254,226,131);

  for (let i = 0; i < myCustomPoints.length; i++) {
    myCustomPoints[i].update();
    myCustomPoints[i].display();
  }
}

class CustomPoint {
  constructor(x, y) {
    this.xBase = x;
    this.yBase = y;

    this.color = this.randomColor(); 
    this.colorChangeTime = random(1, 3);
    this.colorTimer = 0;
  }

  update() {
  
    this.colorTimer += deltaTime / 1000;
    if (this.colorTimer >= this.colorChangeTime) {
      this.color = this.randomColor(); 
      this.colorTimer = 0;
      this.colorChangeTime = random(1, 3);
    }

   
    this.x = this.xBase + random(-7, 7);
    this.y = this.yBase + random(-7, 7);
  }

  display() {
    fill(this.color[0], this.color[1], this.color[2]);
    noStroke();
    ellipse(this.x, this.y, 10, 10);
  }

  randomColor() {
    return [random(0, 255), random(0, 255), random(0, 255)]; 
  }
}
