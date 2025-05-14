let myFont;
let textPoints;
let myCustomPoints = [];
let textPoints2;
let myCustomPoints2 = [];

fontSize = 140;

function preload() {
  myFont = loadFont("zawijasy.otf");
}

function setup() {
  
  textPoints = 
    myFont.textToPoints( "WOOF", 30, 220, fontSize, {sampleFactor: 0.1});
  
  textPoints2 = 
    myFont.textToPoints( "WOOF", 30, 220, fontSize, {sampleFactor: 0.1});
  
  for (let i = 0; i < textPoints.length; i++){
    myCustomPoints.push(new CustomPoint(textPoints[i].x, textPoints[i].y));
    myCustomPoints2.push(new CustomPoint2(textPoints2[i].x, textPoints2[i].y));
  }
  
 
  
  createCanvas(400, 400);
  textSize(fontSize);

  fill(255);
  noStroke();

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
  
}
  
display() {
  
  
  if (this.on) {
  fill(255);
  triangle(this.x, this.y, this.x,this.y+7,this.x+5,this.y+3);
    //triangle(this.x-3,this.y+4,this.x+3, this.y+4, this.x+5,this.y-2 );
    
   
  }
}
  
  
  
}

class CustomPoint2{
  constructor(xPos, yPos) {
    
    this.a2 = 255;
    
    this.x2 = xPos;
    this.y2 = yPos;
    
    
    
    this.timer2 = 0;
    this.blinkTime2 = random(0.5, 1.5);
    
    this.on2 = true
    
    this.partnerPoint2 = null;
    
    
  }
  assignPartnerPoint2(){
    this.partnerPoint2 = random(myCustomPoints2);
  }
  
  update() {
  
  this.timer2 += deltaTime/1000;
  
  if(this.timer2 >= this.blinkTime2){
    this.on2 = !this.on2;
    this.timer2 = 0;
  }

}
  
display() {
  
  
  if (this.on2) {
  fill(255,150);
  triangle(this.x2, this.y2, this.x2,this.y2+7,this.x2+5,this.y2+3 );
    
    //triangle(this.x2-3,this.y2+4,this.x2+5, this.y2+7, this.x2+5,this.y2-2 );
    
  
  }
}
}