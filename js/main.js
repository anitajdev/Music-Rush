// CIRCULAR PROGRESS BAR

let circularProgress = document.querySelector(".circular-progress"),
  progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,
  progressEndValue = 100,
  speed = 50;

let progress = setInterval(() => {
  progressStartValue++;

  progressValue.textContent = `${progressStartValue}%`;
  circularProgress.style.background = `conic-gradient(#191a20 ${
    progressStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (progressStartValue == progressEndValue) {
    clearInterval(progress);
    changeContent();
  }

  // console.log(progressStartValue);
}, speed);

// CHANGING CONTENT

const mainContent = document.querySelector("#main-page");
const songsContent = document.querySelector("#songs-options");
//console.log(mainContent);
//console.log(songsContent);

function changeContent() {
  if (progressStartValue == 100) {
    mainContent.classList.replace("d-flex", "d-none");
    songsContent.classList.replace("d-none", "d-flex");
  }
}

// AUDIO BUTTONS
let clicked = false;

function toggleAudio(audioIndex) {
  const audioElement = document.querySelector(`.audio${audioIndex}`);
  const playPauseButtons = document.querySelectorAll(".togglePlayPause");

  playPauseButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const playPauseIcon = button.querySelector(".icon");

      if (audioElement.paused) {
        console.log("Playing...");
        audioElement.play();
        playPauseIcon.classList.replace("fa-circle-play", "fa-circle-pause");
      } else {
        console.log("Pausing...");
        audioElement.pause();
        playPauseIcon.classList.replace("fa-circle-pause", "fa-circle-play");
      }
    });
  });
}

const playButtons = document.querySelectorAll(".play");

playButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const artist = btn.parentElement.querySelector("p").textContent;
    const title = btn.parentElement.querySelector("h2").textContent;
    const audioSrc = btn.querySelector("audio").getAttribute("src");

    const queryString = `?artist=${encodeURIComponent(
      artist
    )}&title=${encodeURIComponent(title)}&audio=${encodeURIComponent(
      audioSrc
    )}`;
    window.location.href = `./game.html${queryString}`;
  });
});
