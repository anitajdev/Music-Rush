// Get song information from query parameters
const urlParams = new URLSearchParams(window.location.search);
const artist = urlParams.get("artist");
const title = urlParams.get("title");
const audioSrc = urlParams.get("audio");

console.log(artist,title,audioSrc);

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
const tiles = document.querySelectorAll("#tile");
const mainHeader = document.querySelector(".game-style");

// Make tiles clickable

tiles.forEach(tile => {
  tile.addEventListener("click", deleteTiles);
  tile.addEventListener("click", calculateScore);
});

// Delete tiles

function deleteTiles(e){
  e.target.style.display = "none";
  e.target.classList.add("clicked");
}

// START THE GAME

startButton.addEventListener("click", function () {
  gameHeader.classList.replace("d-flex", "d-none");
  startButton.style.display = "none";
  scoreElement.style.display = "block";
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

// // Game variables

let startPos1 = -40;
let startPos2 = -60;
let startPos3 = -50;
let startPos4 = -70;
let startPos5 = -55;

let endPos = 85;
let score = 0;

function startGame() {
 

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

    if(startPos1 == 70 && !tile1.classList.contains("clicked")){

      tile1.style.backgroundColor = "red";
      showResult();
    }

    if (startPos1 == endPos) {
      tile1.style.borderRadius = `0px 0px 0px 27px`;
      tile1.classList.remove("clicked");
      // clearInterval(moving1);
      startPos1 = -40;
      tile1.style.display = "block";
    }

  }, 30);

  let moving2 = setInterval(() => {
    startPos2++;

    tile2.style.top = `${startPos2}%`;

    if (startPos2 < 0) {
      tile2.style.opacity = "0";
    } else {
      tile2.style.opacity = "1";
    }

    if(startPos2 == 70 && !tile2.classList.contains("clicked")){

      tile2.style.backgroundColor = "red";
      showResult();
    }

    if (startPos2 == endPos) {
      tile2.classList.remove("clicked");
      // clearInterval(moving2);
      startPos2= -60;
      tile2.style.display = "block";
    }

  }, 30);


  let moving3 = setInterval(() => {
    startPos3++;
    tile3.style.top = `${startPos3}%`;

    if (startPos3 < 0) {
      tile3.style.opacity = "0";
    } else {
      tile3.style.opacity = "1";
    }


    if(startPos3 == 70 && !tile3.classList.contains("clicked")){

      tile3.style.backgroundColor = "red";
      showResult();
    }

    if (startPos3 == endPos) {
      tile3.classList.remove("clicked");
      // clearInterval(moving3);
      startPos3= -50;
      tile3.style.display = "block";
    }
  }, 30);

  let moving4 = setInterval(() => {
    startPos4++;
    tile4.style.top = `${startPos4}%`;

    if (startPos4 < 0) {
      tile4.style.opacity = "0";
    } else {
      tile4.style.opacity = "1";
    }

    if(startPos4 == 70 && !tile4.classList.contains("clicked")){

      tile4.style.backgroundColor = "red";
      showResult();
    }

    if (startPos4 == endPos) {
      // clearInterval(moving4);
      tile4.classList.remove("clicked");
      startPos4 = -70;
      tile4.style.display = "block";
    }
  }, 30);

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

    if(startPos5 == 70 && !tile5.classList.contains("clicked")){

      tile5.style.backgroundColor = "red";
      showResult();
    }

    if (startPos5 == endPos) {
      tile5.style.borderRadius = `0px 0px 27px 0px`;
      // clearInterval(moving5);
      startPos5 = -55;
      tile5.style.display = "block";
    }
  }, 30);

}

// Calculating score on the screen

let sco = 0;
function calculateScore(){
  sco++;
  scoreElement.textContent = `${sco}`;
}


function showResult(){

  let result = `<div class="d-flex flex-column mb-3 result_box">

  <div class="p-2 final_score_text">You've scored 0 points</div>

  <div class="p-2 buttons">
  <a class="btn btn-primary" href="#" role="button">Retry</a>
  </div>
</div>`;

  mainHeader.innerHTML = result;
}



