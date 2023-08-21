// Get song information from query parameters
const urlParams = new URLSearchParams(window.location.search);
const artist = urlParams.get("artist");
const title = urlParams.get("title");
const audioSrc = urlParams.get("audio");

console.log(artist, title, audioSrc);

// Update header with song information
const songTitleHeader = document.querySelector(".game-header-info h2");
const artistNameHeader = document.querySelector(".game-header-info p");
songTitleHeader.textContent = title;
artistNameHeader.textContent = artist;

// Load and play audio
const audio = new Audio(audioSrc);

// Get the required elements from the HTML

const scoreElement = document.getElementById("score");
const startButton = document.querySelector(".start-button");
const gameHeader = document.querySelector(".game-header");

// START THE GAME

startButton.addEventListener("click", function () {
  gameHeader.classList.replace("d-flex", "d-none");
  startButton.style.display = "none";
  audio.play();
  startGame();
});

/* PLAYING GAME */

//tracks

const track1 = document.querySelector(".game-track1");
const track2 = document.querySelector(".game-track2");
const track3 = document.querySelector(".game-track3");
const track4 = document.querySelector(".game-track4");
const track5 = document.querySelector(".game-track5");

//tiles

const tile1 = document.querySelector(".tile1");
const tile2 = document.querySelector(".tile2");
const tile3 = document.querySelector(".tile3");
const tile4 = document.querySelector(".tile4");
const tile5 = document.querySelector(".tile5");

// Add a click event listener to each tile
tile1.addEventListener("click", function () {
  handleTileClick(tile1);
});
tile2.addEventListener("click", function () {
  handleTileClick(tile2);
});
tile3.addEventListener("click", function () {
  handleTileClick(tile3);
});
tile4.addEventListener("click", function () {
  handleTileClick(tile4);
});
tile5.addEventListener("click", function () {
  handleTileClick(tile5);
});

// Function to handle tile clicks
function handleTileClick(tile) {
  if (tile.style.opacity === "1") {
    score++;
    scoreElement.textContent = `Score: ${score}`;
    tile.style.opacity = "0";
  }
}

// // Game variables

let startPos1 = -40;
let startPos2 = -60;
let startPos3 = -50;
let startPos4 = -70;
let startPos5 = -55;

let endPos = 90;
let score = 0;

function startGame() {
  let gameInterval;
  let moving1 = setInterval(() => {
    startPos1++;

    tile1.style.top = `${startPos1}%`;

    if (startPos1 < 0) {
      tile1.style.opacity = "0";
    } else {
      tile1.style.opacity = "1";
    }

    if (startPos1 == 1) {
      tile1.style.borderRadius = "0px";
    }

    if (startPos1 == endPos) {
      tile1.style.borderRadius = `0px 0px 0px 27px`;
      // clearInterval(moving1);
      startPos1 = -40;
    }
  }, 70);

  let moving2 = setInterval(() => {
    startPos2++;

    tile2.style.top = `${startPos2}%`;

    if (startPos2 < 0) {
      tile2.style.opacity = "0";
    } else {
      tile2.style.opacity = "1";
    }

    if (startPos2 == endPos) {
      // clearInterval(moving2);
      startPos2 = -60;
    }
  }, 70);

  let moving3 = setInterval(() => {
    startPos3++;
    tile3.style.top = `${startPos3}%`;

    if (startPos3 < 0) {
      tile3.style.opacity = "0";
    } else {
      tile3.style.opacity = "1";
    }

    if (startPos3 == endPos) {
      // clearInterval(moving3);
      startPos3 = -50;
    }
  }, 70);

  let moving4 = setInterval(() => {
    startPos4++;
    tile4.style.top = `${startPos4}%`;

    if (startPos4 < 0) {
      tile4.style.opacity = "0";
    } else {
      tile4.style.opacity = "1";
    }

    if (startPos4 == endPos) {
      // clearInterval(moving4);
      startPos4 = -70;
    }
  }, 70);

  let moving5 = setInterval(() => {
    startPos5++;

    tile5.style.top = `${startPos5}%`;

    if (startPos5 == 1) {
      tile5.style.borderRadius = "0px";
    }

    if (startPos5 < 0) {
      tile5.style.opacity = "0";
    } else {
      tile5.style.opacity = "1";
    }

    if (startPos5 == endPos) {
      tile5.style.borderRadius = `0px 0px 27px 0px`;
      // clearInterval(moving5);
      startPos5 = -55;
    }
  }, 70);
}


// End the game
// function endGame() {
//   clearInterval(gameInterval);
//   audio.pause();
//   resultBox.classList.remove("d-none");
//   finalScoreText.textContent = `You've scored ${score} points`;
//   if (score >= 50) {
//     encouragementText.textContent = "UNBELIEVABLE";
//   } else {
//     encouragementText.textContent = "Nice try!";
//   }
// }

// Restart the game
// restartButton.addEventListener("click", () => {
//   startGame();
// });
