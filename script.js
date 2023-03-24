// Get the toggle switch and video elements
const toggleSwitch = document.querySelector('#toggle');
const video = document.querySelector('#myVideo');

// Add event listener to toggle switch
toggleSwitch.addEventListener('change', toggleDarkMode);

// Function to toggle dark mode
function toggleDarkMode() {
  if (toggleSwitch.checked) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}

// Add event listener to video for timeupdate event
video.addEventListener('timeupdate', function() {
  const currentTime = video.currentTime;
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();

  // Check if time is between 8:12 PM and 8:13 PM
  if (hours === 8 && minutes === 12 && currentTime >= 265 && currentTime < 266) {
    video.pause();
    setTimeout(function() {
      video.play();
    }, 60000); // Wait for 1 minute before resuming playback
  }
});
