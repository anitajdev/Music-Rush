// Get the required elements from the HTML
const tilesContainer = document.getElementById("tiles");
const scoreElement = document.getElementById("score");
const resultBox = document.querySelector(".result_box");
const finalScoreText = document.querySelector(".final_score_text");
const encouragementText = document.querySelector(".encouragement-text");
const restartButton = document.querySelector(".restart");
const audioElement = document.getElementById("audio");
const startButton = document.querySelector(".start-bttn"); //NEW ELEMENT
const gameHeader = document.querySelector(".game-header"); // NEW ELEMENT

// Game variables
let score = 0;
let tiles = [];
let gameInterval;

// NEW CHANGE - START THE GAME

startButton.addEventListener("click", function(){
  gameHeader.classList.replace("d-flex", "d-none");
  startButton.classList.replace("d-block", "d-none");
  scoreElement.style.display = "block";
  startGame();
});

// Create tiles
for (let i = 1; i <= 4; i++) {
  const tile = document.createElement("div");
  tile.classList.add("tile");
  tile.dataset.index = i;
  tile.addEventListener("click", () => handleClick(i));
  tilesContainer.appendChild(tile);
  tiles.push(tile);
}

// Handle tile clicks
function handleClick(index) {
  if (index === tiles[0].dataset.index) {
    tiles[0].classList.add("clicked");
    score++;
    updateScore();
    tiles.shift();
    spawnTile();
  } else {
    endGame();
  }
}

// Update score element
function updateScore() {
  scoreElement.textContent = score;
}

// Spawn a new tile
function spawnTile() {
  const tile = document.createElement("div");
  tile.classList.add("tile");
  const randomIndex = Math.floor(Math.random() * 4) + 1;
  tile.dataset.index = randomIndex;
  tile.addEventListener("click", () => handleClick(randomIndex));
  tilesContainer.appendChild(tile);
  tiles.push(tile);
}

// Start the game
function startGame() {
  score = 0;
  tiles = [];
  tilesContainer.innerHTML = "";
  spawnTile();
  updateScore();
  resultBox.classList.add("d-none");
  audioElement.play();
  gameInterval = setInterval(moveTiles, 10);
}

// Move the tiles
function moveTiles() {
  tiles.forEach((tile) => {
    const currentTop = parseInt(getComputedStyle(tile).top);
    const newTop = currentTop + 1;
    tile.style.top = `${newTop}px`;

    if (newTop >= window.innerHeight) {
      endGame();
    }
  });
}

// End the game
function endGame() {
  clearInterval(gameInterval);
  audioElement.pause();
  resultBox.classList.remove("d-none");
  finalScoreText.textContent = `You've scored ${score} points`;
  if (score >= 50) {
    encouragementText.textContent = "UNBELIEVABLE";
  } else {
    encouragementText.textContent = "Nice try!";
  }
}

// Restart the game
restartButton.addEventListener("click", () => {
  startGame();
});

// // Start the game when the page loads
// document.addEventListener("DOMContentLoaded", () => {
//   startGame();
// });
