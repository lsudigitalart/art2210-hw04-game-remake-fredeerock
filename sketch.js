let eX, eY, eS, eSpeed, bgColor, frogColor, gameOver, alphaV;

function setup() {
  createCanvas(400, 400);
  eS = 50;
  eX = 0;
  eY = random(height);
  eSpeed = 1
  bgColor = "grey";
  frogColor = "green";
  gameOver = false;
  alphaV = 0;
}

function draw() {
  background(bgColor);
  fill(frogColor);
  ellipse(mouseX, mouseY, eS);
  fill("black");
  ellipse(eX, eY, eS);
  eX = eX + eSpeed;
  if(eX > width) {
    eX = 0;
    eY = random(height);
  }
  eSpeed = eSpeed + 0.05;

  if(dist(mouseX, mouseY, eX, eY) < 50){
    gameOver = true;
  }

  if(gameOver){
    alphaV = 255;
    fill(255, 0, 0, alphaV)
    rect(0, 0, width, height)
    fill(255, alphaV)
    textAlign(CENTER);
    textSize(32);
    text("Game Over", width / 2, height / 2);
    textSize(16);
    text("Click to Restart", width / 2, height / 2 + 30);
  }

  if(mouseIsPressed) {
    gameOver = false;
    alphaV = 0;
    eSpeed = 1;
  }
}
