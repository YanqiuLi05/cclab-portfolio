let fontSize = 200;
let ComicSan;
let MooArray;
let x;
//let r = 0;


function preload() {
  ComicSan = loadFont('ComicSan.ttf'); 
}


function setup() {
  createCanvas(400, 400);
  textSize(fontSize);
  textFont(ComicSan);
  strokeWeight(0)
  //textAlign(CENTER, CENTER);
 
  MooArray = ComicSan.textToPoints("Moo", width / 2-190, height / 2+50, fontSize,{
    sampleFactor: 0.13
  
    
  });
  
  
}



function draw() {
  background("black");
  
 // let fade;
  
  
   push()
  fill("red")
  //text("Moo",width/2 - 130,height/2 + 65);
  beginShape();
  for (let i = 0; i < MooArray.length; i++){
    if (MooArray[i].x > width / 2) {
      fill(0, 255, 0); 
    }
    //fade = map(MooArray[i].x, width / 2, width, 255, 0);
   
    //fill(fade,0,0);
    
    //vertex(MooArray[i].x,MooArray[i].y);
    ellipse(MooArray[i].x, MooArray[i].y, 10, 10);
    
    /*push();
   translate(MooArray[i].x, MooArray[i].y);
    rotate(r);
    r++;
    strokeWeight(5)
    
    line(-5,-5,5,5);
    pop();*/
  }
  endShape();
  pop()
  
  
}