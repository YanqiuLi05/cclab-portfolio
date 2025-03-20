let video;
let scaleFactor = 1; 
let targetScale = 1; 

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide(); 
}

function draw() {
  background(0);

  image(video, 0, 0, width, height);
  
  let w = 50, h = 40; // original rectangle size
  let x = mouseX
  let y = mouseY//move with the mouse
  

  let smallClip = video.get(x, y, w, h);//pixel captured from the rectangle

  
  scaleFactor = lerp(scaleFactor, targetScale, 0.02);// Gradually increasing size
  
  let enlargedW = w * scaleFactor;
  let enlargedH = h * scaleFactor;
  
  let enlargedX = mouseX - enlargedW / 2;
  let enlargedY = mouseY - enlargedH / 2;//small clip stays in center of the mouse
  
  
  image(smallClip, enlargedX, enlargedY, enlargedW, enlargedH);
  //enlarged picture
 

 if (targetScale >= 3) {
    growing = false;
  } else if (targetScale <= 1) {
    growing = true;
  }

 
  if (growing) {
    targetScale += 0.005;
  } else {
    targetScale -= 0.005;
  }//Once the size bigger than 3, it starts to shrink


  
 

  filter(GRAY);
}
