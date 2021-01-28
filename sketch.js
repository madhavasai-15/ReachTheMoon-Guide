var loading = [];
var loading_image = 1;

var icon;

var website = 'WebSite64';
var directory = '~/My Games';

var Font;
var state = 0;
var background_Color = 255;

var Images = [];
var control_left, control_right, control_up, control_down;

function preload(){

  Font = loadFont('Font.ttf');

  icon = loadAnimation('Images/Icon/01.png', 'Images/Icon/02.png', 'Images/Icon/03.png', 'Images/Icon/04.png');
  icon.frameDelay = 5;

  for(var i = 1; i < 11; i++){
    if(i < 10){
      loading[i] = loadImage('Images/loading/0' + i + '.png');
    }else {
      loading[i] = loadImage('Images/loading/' + i + '.png');
    }
  }

  Images[1] = loadImage('Images/Image_01.png');

  control_left = loadImage('Images/control/left.png');
  control_down = loadImage('Images/control/down.png');
  control_right = loadImage('Images/control/right.png');
  control_up = loadImage('Images/control/up.png');
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  
};

function draw() {
  background(background_Color);  
  rectMode(CENTER);
  noStroke();
  imageMode(CENTER);

  
  if(state === 0){
    if(frameCount % 3 === 0 && loading_image < 10){
      loading_image++;
    }

    if(frameCount % 80 === 0 && loading_image >= 10){
      state = 1;
    }

    if(loading_image === 1){
      image(loading[1], width/2, height/2);
    }else if(loading_image === 2){
      image(loading[2], width/2, height/2);
    }else if(loading_image === 3){
      image(loading[3], width/2, height/2);
    }else if(loading_image === 4){
      image(loading[4], width/2, height/2);
    }else if(loading_image === 5){
      image(loading[5], width/2, height/2);
    }else if(loading_image === 6){
      image(loading[6], width/2, height/2);
    }else if(loading_image === 7){
      image(loading[7], width/2, height/2);
    }else if(loading_image === 8){
      image(loading[8], width/2, height/2);
    }else if(loading_image === 9){
      image(loading[9], width/2, height/2);
    }else if(loading_image === 10){
      image(loading[10], width/2, height/2);
    }
    

    
  }else if(state === 1){
    background_Color = 0;

    fill(250);
    rect(width/2, height/24, width, height/12);

    heading();

    push();
    image(Images[1], width-640/3, height/2+45, 640/2, 480/2);
    pop();

    var text1 = 'REACH THE MOON';
    var text1_ = textWidth(text1);
    var text_height = 45
    fill(0, 191, 0);
    textSize(64);
    text(text1, 0, height/24+text_height*3);

    var text2_ = textWidth(website);
    fill(191, 0, 191);
    textSize(64);
    text(website, 0+text1_+text2_*1.4, height/24+text_height*3);

    var text3_ = textWidth(directory);
    fill(191, 191, 0);
    textSize(64);
    text(directory, 0+text1_+text2_*1.4+text3_/1.15, height/24+text_height*3);

    var text4 = 'ReachTheMoon is a Game about a ball which had a goal about reaching the moon.';
    fill(255);
    textSize(64/2);
    text(text4, 500, height, width/2, height/2);

    fill(255);
    image(control_left, width/6, height/1.8, width/20, height/10);
    image(control_down, width/6+width/18, height/1.8, width/20, height/10);
    image(control_right, width/6+width/9, height/1.8, width/20, height/10);
    image(control_up, width/6+width/18, height/1.8-height/9, width/20, height/10);
    
    var text5 = 'use Arrow keys to move the Player!';
    fill(255);
    textSize(64/2);
    text(text5, width/1.8, height/1.5, width/4, height/2);
  }
};

function mouseReleased() {
  
};

function heading(){
  animation(icon, width/30, height/22);
  if(mouseX > width/30-64/2 && mouseX < width/30+64/2 && mouseY > height/22-64/2 && mouseY < height/22+64/2){
      icon.play();
  }else {
      icon.changeFrame(3);
      icon.stop();
  }
  
  textFont(Font);
  fill(0);
  textSize(20);
  text(website + ':/My Games/ReachTheMoon', width/15, height/18);
};