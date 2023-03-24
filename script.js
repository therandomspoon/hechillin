const toggleSwitch = document.querySelector('#toggle');
const video = document.querySelector('#myVideo');

toggleSwitch.addEventListener('change', toggleDarkMode);

function toggleDarkMode() {
  if (toggleSwitch.checked) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}


// Set the video to autoplay and loop
video.autoplay = true;
video.loop = true;

function playVideoAt8AM() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = video.currentTime;

  if (hours === 8 && minutes === 0) {
    video.play();
  }

  if (hours === 8 && minutes === 12 && currentTime >= 252 && currentTime < 253) {
    video.pause();
  }

  if (hours === 8 && minutes === 13 && currentTime >= 252 && currentTime < 253) {
    video.play();
  }
}

setInterval(playVideoAt8AM, 1000);
