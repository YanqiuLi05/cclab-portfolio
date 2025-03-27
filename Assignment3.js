let video;
let scaleFactor = 1; 
let targetScale = 1; 
let img;
let showImage = false; 

function preload() {
  img = loadImage('tinydoggy.png');
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
}

function draw() {
  background(0);
  image(video, 0, 0, width, height);

  // Gradually increase size
  scaleFactor = lerp(scaleFactor, targetScale, 0.02);

  let w = 50, h = 40; // Original rectangle size
  let x = mouseX;
  let y = mouseY; // Move with the mouse

  let smallClip = video.get(x, y, w, h); // Capture pixels from the video
  
  
  let grayClip = applyGrayscale(smallClip);//greyscale in the clip 
  
  let enlargedW = w * scaleFactor;
  let enlargedH = h * scaleFactor;
  let enlargedX = mouseX - enlargedW / 2;
  let enlargedY = mouseY - enlargedH / 2; // Small clip stays in center of the mouse

  let imgOriginalW = img.width;
  let imgOriginalH = img.height;
  
  let imgScaledW = imgOriginalW * scaleFactor;
  let imgScaledH = imgOriginalH * scaleFactor;
  let imgX = 500 - imgScaledW / 2;
  let imgY = 400 - imgScaledH / 2;//image size change with scalefactor

  
  let isInsideClip = (
    imgX > enlargedX &&
    imgX + imgScaledW < enlargedX + enlargedW &&
    imgY > enlargedY &&
    imgY + imgScaledH < enlargedY + enlargedH
  );//if image is in clip area
  image(grayClip, enlargedX, enlargedY, enlargedW, enlargedH);

  if (isInsideClip) {
    image(img, imgX, imgY, imgScaledW, imgScaledH);
  }// Only draw the image if it is completely inside the smallClip

  
  if (targetScale >= 3) {
    growing = false;
  } else if (targetScale <= 1) {
    growing = true;
  }

  if (growing) {
    targetScale += 0.005;
  } else {
    targetScale -= 0.005;
  }
}//shink only it grows bigger then 3


function applyGrayscale(inputImg) {
  inputImg.loadPixels();
  for (let i = 0; i < inputImg.pixels.length; i += 4) {
    let r = inputImg.pixels[i];
    let g = inputImg.pixels[i + 1];
    let b = inputImg.pixels[i + 2];
    
    let brightness = (r + g + b) / 3; 

    inputImg.pixels[i] = brightness;
    inputImg.pixels[i + 1] = brightness;
    inputImg.pixels[i + 2] = brightness;
  }
  inputImg.updatePixels();
  return inputImg;
}//greyscale filter
