window.onload = function() {

  // audio
  var audio = document.getElementById("audio");

  // Buttons
  var playButton = document.getElementById("play-pause");
  var muteButton = document.getElementById("mute");

  // Sliders
  var volumeBar = document.getElementById("volume-bar");

  // Event listener for the play/pause button
  playButton.addEventListener("click", function() {
    if (audio.paused == true) {
      // Play the audio
      audio.play();

      // Update the button text to 'Pause'
      playButton.innerHTML = "Pause";
    } else {
      // Pause the audio
      audio.pause();

      // Update the button text to 'Play'
      playButton.innerHTML = "Play";
    }
  });

  // Event listener for the mute button
  muteButton.addEventListener("click", function() {
    if (audio.muted == false) {
      // Mute the audio
      audio.muted = true;

      // Update the button text
      muteButton.innerHTML = "Unmute";
    } else {
      // Unmute the audio
      audio.muted = false;

      // Update the button text
      muteButton.innerHTML = "Mute";
    }
  });

  // Event listener for the volume bar
  volumeBar.addEventListener("change", function() {
    // Update the audio volume
    audio.volume = volumeBar.value;
  });

}
