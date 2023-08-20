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
const startButton = document.querySelector(".start-bttn"); //NEW ELEMENT
const gameHeader = document.querySelector(".game-header"); // NEW ELEMENT

startButton.addEventListener("click", () => {
  gameHeader.classList.replace("d-flex", "d-none");
  startButton.classList.replace("d-block", "d-none");
  scoreElement.style.display = "block";
  audio.play();
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

// Update score element
function updateScore() {
  scoreElement.textContent = score;
}

// Handle tile clicks
function handleClick(index) {
  // alert("test") ovde udje
  if (index === tiles[0].dataset.index) {
    // alert("test") ovde ne udje ???
    tiles[0].classList.add("clicked");
    score++;
    updateScore();
    tiles.shift();
    spawnTile();
  } else {
    endGame();
  }
}

/// Spawn a new tile
function spawnTile() {
  const tile = document.createElement("div");
  tile.classList.add("tile");
  const randomIndex = Math.floor(Math.random() * 4) + 1;
  tile.dataset.index = randomIndex;

  // Calculate tile position based on audio position and duration
  const audioPosition = audio.currentTime;
  const audioDuration = audio.duration;
  const tilePosition = (audioPosition / audioDuration) * 100;

  tile.style.top = `${tilePosition}%`; // Set initial position based on audio position
  tile.addEventListener("click", () => handleClick(randomIndex));
  tilesContainer.appendChild(tile);
  tiles.push(tile);
}

// Start the game
function startGame() {
  //code without the delay
  // audio.play();
  // score = 0;
  // tiles = [];
  // tilesContainer.innerHTML = "";
  // spawnTile();
  // updateScore();
  // resultBox.classList.add("d-none");
  // gameInterval = setInterval(moveTiles, 10);

  score = 0;
  tiles = [];
  tilesContainer.innerHTML = "";
  // updateScore();
  resultBox.classList.add("d-none");
  setTimeout(() => {
    spawnTile(); // Start spawning tiles after the delay
    gameInterval = setInterval(moveTiles, 10);
    audio.play(); // Start playing audio
  }, 4000); // 4 seconds delay
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
  audio.pause();
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
