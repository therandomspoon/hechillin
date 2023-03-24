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

video.addEventListener('timeupdate', function() {
  const currentTime = video.currentTime;
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  if (hours === 08 && minutes === 15 && currentTime >= 495 && currentTime < 496) {
    video.pause();
    setTimeout(function() {
      video.play();
    }, 60000);
  }
});
