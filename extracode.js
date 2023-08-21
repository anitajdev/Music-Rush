// function toggleAudio(audioIndex) {
//   const audioElement = document.querySelector(`.audio${audioIndex}`);

//   if (audioElement.paused) {
//     audioElement.play();
//   } else {
//     audioElement.pause();
//   }
// }

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

function playAudio(audioElement, playPauseIcon) {
  console.log("Playing...");
  audioElement.play();
  playPauseIcon.classList.replace("fa-circle-play", "fa-circle-pause");
}

function pauseAudio(audioElement, playPauseIcon) {
  console.log("Pausing...");
  audioElement.pause();
  playPauseIcon.classList.replace("fa-circle-pause", "fa-circle-play");
}

function toggleAudio(audioIndex) {
  const audioElement = document.querySelector(`.audio${audioIndex}`);
  const playPauseButtons = document.querySelectorAll(".togglePlayPause");

  playPauseButtons.forEach((button) => {
 
    const playPauseIcon = button.querySelector(".icon");

    button.addEventListener("click", () => {
      
      if (audioElement.paused) {
        playAudio(audioElement, playPauseIcon);
      } else {
        pauseAudio(audioElement, playPauseIcon);
      }
    });
  });
}