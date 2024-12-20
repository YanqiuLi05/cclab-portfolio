let button;
let x = 300;
let y = 300;
let scene = 1; 
let clickCount = 0; //click on yes button
let player;
let walls = [];
let rectangles = [];
let music;


class Player {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }//player and dog

  display() {
    fill("gray");
    image(playerndog, this.x, this.y, 100, 100);
      
   // ellipse(this.x, this.y, this.size, this.size);
  }

  move() {
    if (keyIsDown(RIGHT_ARROW)) this.x += 5;
    if (keyIsDown(LEFT_ARROW)) this.x -= 5;
    if (keyIsDown(UP_ARROW)) this.y -= 5;
    if (keyIsDown(DOWN_ARROW)) this.y += 5;
  }//keys to control player moving

  reset() {
    this.x = 50;
    this.y = 550;
  }//restart when hitting the wall
  
  isCollidingWith(obj) {
    return (
      this.x + this.size/ 2 > obj.x &&
      this.x - this.size / 2 < obj.x + obj.width &&
      this.y + this.size/ 2 > obj.y &&
      this.y - this.size / 2 < obj.y + obj.height
    );//hitting the wall
  }
}

class Wall {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }//wall of the maze

  display() {
    fill(0);
    rect(this.x, this.y, this.width, this.height);
  }
}

class Rectangle {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }//option box

  display() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  }

  isMouseOver() {
    return (
      mouseX > this.x &&
      mouseX < this.x + this.width &&
      mouseY > this.y &&
      mouseY < this.y + this.height
    );//when mouse click on the boxes
  }
}

function setup() {
  if (music) {
    music.loop(); 
    music.setVolume(0.5); 
  }
  createCanvas(600, 600);
  button = createButton('YES!!');
  button.position(x, y);
  button.mousePressed(randomPos);//yes button
  
  player = new Player(50, 400, 20);
  
   walls.push(new Wall(150, 140, 20, 460));
  walls.push(new Wall(310, 0, 20, 460));
  walls.push(new Wall(460, 140, 20, 460));
  
  rectangles.push(new Rectangle(250, 250, 100, 50, 'white')); // Upper rectangle
  rectangles.push(new Rectangle(250, 350, 100, 50, 'white')); // Lower rectangle
}

function draw() {

  background("white");
  image(momndad, 0, 0, 600, 600);
  fill("white");
  textFont('Courier New', 20);
  text('You want a dog for your birthday gift?', 280, 220, 250);//mom and dad scene
  

  switch (scene) {
    case 1: 
      if (clickCount >= 7) {  
        scene = 2;  
        button.hide();  
      }
      break;//go the scene2 after click 7 times
      
    case 2:  
      background(255,152,0);  
      image(loading, 250, 250, 100, 100);
      textSize(32);
      fill("white");
       textFont('Courier New', 20);
      text('Mmmmmm, if you really want a dog...', 100, 200);  
      text('get a good grade first!!', 150, 400);       push()
      fill("white")
      textFont('Courier New', 15);
      text('CLICK TO CONTINUE>>', 30, 565);
      pop()
      break;
      
    case 3:  
      background(100); 
      image(paper, 0, 0, 600, 600);
      textSize(32);
      fill("white");
      textFont('Courier New', 20);
      text('Which 4 numbers can be made to 24 with basic mathematical operations?', 190, 110,250,280);  
      rectangles.forEach(rect => rect.display());
      fill("gray");
      text('2,3,3,4', 258, 280);
      text('6,2,12,5', 251, 380);
      //push()
      //fill("white")
      //text('CLICK TO CONTINUE>>', 30, 565);
      //pop()
      break;//the first question
      
    case 4:
      background(0);
       image(paperwrong, 0, 0, 600, 600);//you got the wrong answer, try again
      push()
      fill("white");
      textFont('Courier New', 15);
      text('CLICK TO CONTINUE>>', 30, 565);
      pop()
      break;// first question wrong

    case 5:
      background(0);
      image(papercorrect, 0, 0, 600, 600);
      push()
      fill("white")
      textFont('Courier New', 15);
      text('CLICK TO CONTINUE>>', 30, 565);
      pop()
      break;// first question correct
      
      case 6:
      background(0);
      image(paper, 0, 0, 600, 600);
      textSize(32);
      fill("white");
      textFont('Courier New', 17);
      text('which four numbers can be put into the [],and make the equation work?([] - []) x [] + [] = 24', 190, 108,250,280)
      rectangles.forEach(rect => rect.display());
      fill("gray");
      text('7,3,4,8', 258, 280);
      text('9,1,9,5', 258, 380);
      break;//second question
      
      case 7:
      background(0);
       image(paperwrong, 0, 0, 600, 600);//second question wrong
      push()
      fill("white");
      textFont('Courier New', 15);
      text('CLICK TO CONTINUE>>', 30, 565);
      pop()
      break;

    case 8:
      background(0);
      image(papercorrect, 0, 0, 600, 600);///second question correct
      push()
      fill("white");
      textFont('Courier New', 15);
      text('CLICK TO CONTINUE>>', 30, 565);
      pop()
      break;
      
      case 9:
      background(0);
      image(dogunlocked, 0, 0, 600, 600);// you got a dog!!!!!
      push()
      fill("white");
      textFont('Courier New', 15);
      text('CLICK TO CONTINUE>>', 30, 565);
      pop()
      
      break;
      
      case 10:
      background(255,152,0);  
      image(loading, 250, 250, 100, 100);
      textSize(32);
      fill("white");
      text("Let's go take him for a walk", 30, 200);
      push()
      fill("white");
      textFont('Courier New', 15);
      text('CLICK TO CONTINUE>>', 30, 565);
      pop()
      break;
      
       case 11:
      background('rgb(214,214,214)');
      walls.forEach(wall => wall.display());
      image(maze, 0, 0, 600, 600);
      player.display();
      player.move();
      
      

      if (walls.some(wall => player.isCollidingWith(wall)) ||
          player.x < 0 || player.x > width || player.y < 0 || player.y > height) {
        player.reset();
      }

      
      if (dist(player.x, player.y, 600, 600) < 120) {
        scene = 12;
      }
      push()
      fill("white")
      textFont('Courier New', 15);
      text('USE ARROW KEYS TO WALK AROUND>>', 30, 565);
      pop()
      break;//maze
      
      case 12:
      image(end, 0, 0, 600, 600);
      push()
      fill("white")
      textFont('Courier New', 15);
      text('CLICK TO RESTART THE GAME', 30, 565);
      pop()
      break;
  }
    
}
      

function randomPos() {
  x = random(70, 510); 
  y = random(280, 520); 
  button.position(x, y);
}//button goes to ramdom places

function mouseClicked() {
  if (scene === 1) {
    clickCount++;
  } else if (scene === 2) {
    scene = 3;
  } else if (scene === 3) {
    if (rectangles[0].isMouseOver()) {
      scene = 4; 
    } else if (rectangles[1].isMouseOver()) {
      scene = 5;  
    }
  } else if (scene === 4) {
    scene = 3;  
  } else if (scene === 5) {
    scene = 6; 
  } else if (scene === 6) {
    if (rectangles[0].isMouseOver()) {
      scene = 8; 
    } else if (rectangles[1].isMouseOver()) {
      scene = 7;  
    }
  } else if (scene === 7) {
    scene = 6;  
  } else if (scene === 8) {
    scene = 9;  
  } else if (scene === 9) {
    scene = 10; 
  } else if (scene === 10) {
    scene = 11;  
  } else if (scene === 12) {
    restartGame(); // go back to scene 1
  }
}


function preload(){
  momndad = loadImage("momndad.png");
  loading = loadImage("dogwalk.gif");
  paper = loadImage("paper.png");
  papercorrect = loadImage("papercorrect.png");
  paperwrong = loadImage("paperwrong.png");
  dogunlocked = loadImage("dogunlocked.png");
  maze = loadImage("maze.png");
  playerndog = loadImage("playerndog.png");
  end = loadImage("end.png");
  music = loadSound('eek.mp3');
}


function restartGame() {
  scene = 1;         
  clickCount = 0;    
  player.reset();    
  x = 300;           
  y = 300;
  button.position(x, y); 
  button.show(); 
}