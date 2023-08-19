//elements from HTML
const tilesContainer = document.getElementById("tiles");
const scoreElement = document.getElementById("score");
const audio = document.getElementById("audio");
const outAudio = document.getElementById("out");
const resultAudio = document.getElementById("result");
const restartButton = document.querySelector(".restart");
const resultBox = document.querySelector(".result_box");
const finalScoreText = document.querySelector(".final_score_text");

let currentAudioSource = "";

let score = 0;
let isGameOver = false;

//Function to create new tiles
function createTile() {
  const tile = document.createElement("div");
  tile.addEventListener("click", () => onTileClick(tile));
  return tile;
}


