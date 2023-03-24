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
  const currentSeconds = (hours * 60 * 60) + (minutes * 60) + Math.floor(currentTime);
  if (currentSeconds >= 964 and currentSeconds < 965) {
    video.pause();
    setTimeout(function() {
      video.play();
    }, 60000);
  }
});
