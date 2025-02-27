let myFont;
let textPoints = [];
let myCustomPoints = [];
let myCustomPoints2 = [];
let myCustomPoints3 = [];
let fontSize = 100;
let pointSize = 20; 
let offX = -5;
let offY = 5;  

function preload() {
  myFont = loadFont("Sirukota.ttf");
  bagelImage = loadImage("ProductCloseUp_Sesame_1024x1024_102d79a0-68b6-4095-860d-b49bf352c8c1.webp")
}

function setup() {
  createCanvas(400, 400);

  textPoints = myFont.textToPoints("B A G E L", 30, 220, fontSize, { sampleFactor: 0.05 });

  for (let i = 0; i < textPoints.length; i++) {
    myCustomPoints.push(new CustomPoint(textPoints[i].x, textPoints[i].y, pointSize, true)); 
    myCustomPoints2.push(new CustomPoint(textPoints[i].x + offX, textPoints[i].y + offY, pointSize, false)); 
    myCustomPoints3.push(new CustomPoint(textPoints[i].x, textPoints[i].y, pointSize - 13, false)); // Now correctly added to myCustomPoints3
  }
}

function draw() {
  //background(64,64,64); 
 image(bagelImage, 0, 0, width, height); 
  // Draw shadow layer
  for (let i = 0; i < myCustomPoints2.length; i++) {
    myCustomPoints2[i].display();
  }

  // Draw colorful layer
  for (let i = 0; i < myCustomPoints.length; i++) {
    myCustomPoints[i].update();
    myCustomPoints[i].display();
  }

  // Draw smaller points
  for (let i = 0; i < myCustomPoints3.length; i++) {
    myCustomPoints3[i].display();
  }
}

class CustomPoint {
  constructor(x, y, size, isColorChanging) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = [0, 0, 0];
  }

  update() {
    let r = map(mouseX, 0, width, 100, 255);  
    let g = map(mouseY, 0, height, 100, 255); 
    let b = map(mouseX + mouseY, 0, width + height, 100, 255); 

    this.color = [r, g, b];
  }

  display() {
    fill(this.color[0], this.color[1], this.color[2]);
    noStroke();
    circle(this.x, this.y, this.size);
    for (let i = 0; i < 40; i++) {
    push();
      fill(0,100);  
      translate(this.x, this.y);
      rotate(random(0, PI * 2));
    
      circle(0, random(3.5, 10), random(0.2,1));
      
      
    pop();
  }
}
}