let myFont;
let textPoints = [];

let myCustomPoints = [];

let fontSize = 140;

function preload() {
  myFont = loadFont("zawijasy.otf");
}

function setup() {
  createCanvas(400, 400);

  textPoints = myFont.textToPoints("WOOF", 30, 220, fontSize, { sampleFactor: 0.1 });
 
  for (let i = 0; i < textPoints.length; i++) {
    myCustomPoints.push(new CustomPoint(textPoints[i].x, textPoints[i].y, 255));  
    
  }
}

function draw() {
  background("black");

  for (let i = 0; i < myCustomPoints.length; i++) {
    myCustomPoints[i].update();
    myCustomPoints[i].display();
  }
}

class CustomPoint {
  constructor(x, y, opacity) {
    this.x = x;
    this.y = y;
    
    this.timer = 0;
    this.blinkTime = random(0.5, 1.5); 
    this.on = true;

    this.color = this.randomColor(); 
    this.colorChangeTime = random(1, 3);
    this.colorTimer = 0;
  }

  update() {
    this.timer += deltaTime / 1000;
    if (this.timer >= this.blinkTime) {
      this.on = !this.on;
      this.timer = 0;
      this.blinkTime = random(0.5, 1.5); // Reset blink time
    }

    
    this.colorTimer += deltaTime / 1000;
    if (this.colorTimer >= this.colorChangeTime) {
      this.color = this.randomColor(); 
      this.colorTimer = 0;
      this.colorChangeTime = random(1, 3); 
    }
  }

  display() {
    if (this.on) {
      fill(this.color[0], this.color[1], this.color[2]); 
      noStroke();
      ellipse(this.x, this.y, 5, 5);
    }
  }

  randomColor() {
    return [random(100, 255), random(100, 255), random(100, 255)]; 
  }
}
