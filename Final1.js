let myFont;
let textPoints;
let myCustomPoints = [];
let textPoints2;
let myCustomPoints2 = [];
let textPoints3;
let myCustomPoints3 = [];
let time = 0;


fontSize = 130;

function preload() {
  myFont = loadFont("zawijasy.otf");
}

function setup() {
  
  textPoints = 
    myFont.textToPoints( "RUBY", 30, 220, fontSize, {sampleFactor: 0.1});
  
  textPoints2 = 
    myFont.textToPoints( "RUBY", 30, 220, fontSize, {sampleFactor: 0.1});
  
  textPoints3 = 
    myFont.textToPoints( "RUBY", 30, 220, fontSize, {sampleFactor: 0.1});
  
  for (let i = 0; i < textPoints.length; i++){
    myCustomPoints.push(new CustomPoint(textPoints[i].x, textPoints[i].y));
    myCustomPoints2.push(new CustomPoint(textPoints2[i].x, textPoints2[i].y));
    myCustomPoints3.push(new CustomPoint(textPoints3[i].x, textPoints3[i].y));
  }
  
 
  
  createCanvas(400, 400);
  textSize(fontSize);

  fill(255);
  noStroke();
  
  
   //let size = random(2, 6);  
   
    
    

}


function draw() {
  background("black");
  
  for(let i = 0; i < myCustomPoints.length; i++) {
    myCustomPoints[i].update();
    myCustomPoints[i].display();
  }
  
    for(let i = 0; i < myCustomPoints2.length; i++) {
    myCustomPoints2[i].update();
    myCustomPoints2[i].display();
  }
  
  for(let i = 0; i < myCustomPoints3.length; i++) {
    myCustomPoints3[i].update();
    myCustomPoints3[i].display();
  }
  
  }

class CustomPoint{
  constructor(xPos, yPos) {
    
    this.a = 255;
    
    this.x = xPos;
    this.y = yPos;
    
    
    this.timer = 0;
    this.blinkTime = random(0.5, 1.5);
    
    this.on = true
    
    this.partnerPoint = null;
    
   
  }

  
  
  
  assignPartnerPoint(){
    this.partnerPoint = random(myCustomPoints);
  }
    
    
  
  
update() {
 
  this.timer += deltaTime/1000;
 
  if(this.timer >= this.blinkTime){
    this.on = !this.on;
    this.timer = 0;
  }
  this.opacity = random(40,255);
  this.opacity2 = random(0,100);
  
  let d = dist(this.x, this.y, mouseX, mouseY);
  
    
    this.appear = d < 100;
    
}
  
display() {
  let d = dist(this.x, this.y, mouseX, mouseY);
  let triangleSize = map(d, 0, 100, 2.5, 1,true);
  
  let w = 5 * triangleSize;
  let h = 7 * triangleSize;
  
  
  fill(0);
    triangle(this.x, this.y, this.x, this.y + h, this.x + w, this.y + h / 2);
    
    if (this.appear) {
      fill(255, 0, 0, this.opacity);
      triangle(this.x, this.y, this.x, this.y + h, this.x + w, this.y + h / 2);
    } else {
      fill(255, 0, 0, this.opacity2);
      triangle(this.x, this.y, this.x, this.y + h, this.x + w, this.y + h / 2);
    }
  }

  
  
  
}