let myFont;
let textPoints = [];
let textPoints2 = [];
let myCustomPoints = [];
let myCustomPoints2 = [];

let fontSize = 140;
let waveSpeed = 0.08;  
let waveHeight = 4;   

function preload() {
  myFont = loadFont("zawijasy.otf");
}

function setup() {
  createCanvas(400, 400);

  textPoints = myFont.textToPoints("WOOF", 30, 220, fontSize, { sampleFactor: 0.1 });
  textPoints2 = myFont.textToPoints("WOOF", 30, 220, fontSize, { sampleFactor: 0.1 });

  for (let i = 0; i < textPoints.length; i++) {
    myCustomPoints.push(new CustomPoint(textPoints[i].x, textPoints[i].y, 255));  
    myCustomPoints2.push(new CustomPoint(textPoints2[i].x, textPoints2[i].y, 150)); 
  }
}

function draw() {
  background("black");

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
  constructor(xPos, yPos) {
    this.x = xPos;
    this.yBase = yPos; 
    

    this.timer = 0;
    this.blinkTime = random(0.5, 1.5); 
    this.on = true;
  }

  update() {
    
    this.y = this.yBase + sin(frameCount * waveSpeed + this.x * 0.1) * waveHeight;

   
    this.timer += deltaTime / 1000;
    if (this.timer >= this.blinkTime) {
      this.on = !this.on;
      this.timer = 0;
      this.blinkTime = random(0.5, 1.5); 
    }
  }

  display() {
    if (this.on) {
      fill(255, 100);  
      noStroke();
      ellipse(this.x, this.y, 5, 5);
    }
  }
}
