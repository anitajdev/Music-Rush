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
function toggleAudio(audioIndex) {
        const audioElement = document.querySelector(`.audio${audioIndex}`);
        const toggleButton = document.querySelector(`.togglePlayPause:nth-child(${audioIndex})`);

       if (audioElement.paused) {
            audioElement.play();
           
        } else {
            audioElement.pause();
            
        }
    }
