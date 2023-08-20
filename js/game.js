// Get song information from query parameters
const urlParams = new URLSearchParams(window.location.search);
const artist = urlParams.get("artist");
const title = urlParams.get("title");
const audioSrc = urlParams.get("audio");

// Update header with song information
const songTitleHeader = document.querySelector(".game-header-info h2");
const artistNameHeader = document.querySelector(".game-header-info p");
songTitleHeader.textContent = title;
artistNameHeader.textContent = artist;

// Load and play audio
const audio = new Audio(audioSrc);

// Game logic
const gameContainer = document.querySelector("#game-container");
const tilesContainer = document.querySelector(".tiles");
const scoreElement = document.getElementById("score");

let score = 0;
let isGameStarted = false;
let tilesInterval;
let gameInterval;
let tiles = [];
let tileSpeed = 1;

// Get the required elements from the HTML

const resultBox = document.querySelector(".result_box");
const finalScoreText = document.querySelector(".final_score_text");
const encouragementText = document.querySelector(".encouragement-text");
const restartButton = document.querySelector(".restart");
const audioElement = document.getElementById("audio");
const startButton = document.querySelector(".start-bttn"); //NEW ELEMENT
const gameHeader = document.querySelector(".game-header"); // NEW ELEMENT

startButton.addEventListener("click", () => {
  audio.play();
  gameHeader.classList.replace("d-flex", "d-none");
  startButton.classList.replace("d-block", "d-none");
  scoreElement.style.display = "block";
  startGame();

  // Create tiles
  for (let i = 1; i <= 4; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.dataset.index = i;
    tile.addEventListener("click", () => handleClick(i));
    tilesContainer.appendChild(tile);
    tiles.push(tile);
  }
});

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
  tile.style.top = `${-tile.clientHeight}px`; // Set initial position above the visible area
  tile.addEventListener("click", () => handleClick(randomIndex));
  tilesContainer.appendChild(tile);
  tiles.push(tile);
}

// Start the game
function startGame() {
  score = 0;
  tiles = [];
  tilesContainer.innerHTML = "";
  updateScore();
  resultBox.classList.add("d-none");
  setTimeout(() => {
    spawnTile(); // Start spawning tiles after the delay
    gameInterval = setInterval(moveTiles, 10);
    audio.play(); // Start playing audio
  }, 5000); // 5s delay
}

// Move the tiles
function moveTiles() {
  tiles.forEach((tile) => {
    const currentTop = parseInt(getComputedStyle(tile).top);
    const newTop = currentTop + tileSpeed;
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

audio.addEventListener("timeupdate", () => {
  if (isGameStarted) {
    const audioPosition = audio.currentTime;
    const tilePosition = (audioPosition / audio.duration) * 100;

    tiles.forEach((tile) => {
      tile.style.top = `${tilePosition}%`;
      if (tilePosition > 100) {
        endGame();
      }
    });
  }
});
