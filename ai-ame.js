// Get the required elements from the HTML
const tilesContainer = document.getElementById("tiles");
const scoreElement = document.getElementById("score");
const audio = document.getElementById("audio");
const outAudio = document.getElementById("out");
const resultAudio = document.getElementById("result");
const restartButton = document.querySelector(".restart");
const resultBox = document.querySelector(".result_box");
const finalScoreText = document.querySelector(".final_score_text");

let score = 0;
let isGameOver = false;

// Function to create a new tile
function createTile() {
  const tile = document.createElement("div");
  tile.classList.add("tile");
  tile.addEventListener("click", () => onTileClick(tile));
  return tile;
}

// Function to move tiles down
function moveTiles() {
  const tiles = tilesContainer.querySelectorAll(".tile");
  tiles.forEach(tile => {
    const top = parseInt(getComputedStyle(tile).top) + 10;
    tile.style.top = top + "px";
    if (top >= window.innerHeight) {
      tilesContainer.removeChild(tile);
      if (!isGameOver) {
        outAudio.play();
        endGame();
      }
    }
  });
}

// Function to handle tile clicks
function onTileClick(tile) {
  if (tile.classList.contains("active")) {
    tile.classList.remove("active");
    tile.style.backgroundColor = "#222";
    score++;
    scoreElement.textContent = score;
    audio.play();
  }
}

// Function to start the game
function startGame() {
  isGameOver = false;
  resultBox.classList.remove("d-flex");
  resultBox.classList.add("d-none");
  score = 0;
  scoreElement.textContent = score;
  tilesContainer.innerHTML = "";
  createTilesInterval = setInterval(() => {
    const tile = createTile();
    tilesContainer.appendChild(tile);
    setTimeout(() => {
      tile.style.left = Math.floor(Math.random() * 4) * 25 + "%";
      tile.classList.add("active");
      tile.style.animation = "tileDown 1s linear";
    }, 100);
  }, 1000);

  moveTilesInterval = setInterval(moveTiles, 100);
}

// Function to end the game
function endGame() {
  clearInterval(createTilesInterval);
  clearInterval(moveTilesInterval);
  isGameOver = true;
  resultAudio.play();
  finalScoreText.textContent = `You've scored ${score} points`;
  resultBox.classList.remove("d-none");
  resultBox.classList.add("d-flex");
}

// Event listener for restart button
restartButton.addEventListener("click", startGame);

// Start the game when the page loads
document.addEventListener("DOMContentLoaded", startGame);

// Add this variable at the beginning of your game.js file
let currentAudioSource = "";

// ... Your existing code ...

// Function to toggle play/pause and change the audio source
function togglePlayPause(audioSource) {
  const audio = document.querySelector("audio.audio1"); // Change the class to match the audio element's class
  if (audio.paused) {
    if (currentAudioSource !== audioSource) {
      currentAudioSource = audioSource;
      audio.src = audioSource;
      audio.load();
    }
    audio.play();
  } else {
    audio.pause();
  }
}

// ... Your existing code ...
