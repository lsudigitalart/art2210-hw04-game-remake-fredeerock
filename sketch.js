// Declare variables for circle position, size, speed, colors, and game state
let eX, eY, eS, eSpeed, bgColor, frogColor, gameOver, alphaV;

// Setup function to initialize the game
function setup() {
  createCanvas(400, 400); // Create a canvas of 400x400 pixels
  eS = 50; // Set the size of the circles
  eX = 0; // Initialize the x position of the enemy circle
  eY = random(height); // Set the y position of the enemy circle randomly
  eSpeed = 1; // Initialize the speed of the enemy circle
  bgColor = "grey"; // Set the background color
  frogColor = "green"; // Set the color of the player's circle
  gameOver = false; // Initialize game over state
  alphaV = 0; // Initialize alpha value for transparency
}

// Draw function to render the game
function draw() {
  background(bgColor); // Set the background color
  fill(frogColor); // Set the fill color for the player's circle
  ellipse(mouseX, mouseY, eS); // Draw the player's circle at the mouse position
  fill("black"); // Set the fill color for the enemy circle
  ellipse(eX, eY, eS); // Draw the enemy circle
  eX = eX + eSpeed; // Update the x position of the enemy circle
  if(eX > width) {
    eX = 0; // Reset enemy position if it goes off screen
    eY = random(height); // Set a new random y position
  }
  eSpeed = eSpeed + 0.05; // Increase the speed of the enemy circle

  // Check for collision between player and enemy circles
  if(dist(mouseX, mouseY, eX, eY) < 50){
    gameOver = true; // Set game over state if circles collide
  }

  // Render game over screen if game is over
  if(gameOver){
    alphaV = 255; // Set alpha value for the game over screen
    fill(255, 0, 0, alphaV) // Set fill color for the game over overlay
    rect(0, 0, width, height) // Draw overlay rectangle
    fill(255, alphaV) // Set fill color for text
    textAlign(CENTER); // Center align text
    textSize(32); // Set text size for game over message
    text("Game Over", width / 2, height / 2); // Display game over message
    textSize(16); // Set text size for restart message
    text("Click to Restart", width / 2, height / 2 + 30); // Display restart message
  }

  // Restart the game on mouse click
  if(mouseIsPressed) {
    gameOver = false; // Reset game over state
    alphaV = 0; // Reset alpha value
    eSpeed = 1; // Reset enemy speed
  }
}
