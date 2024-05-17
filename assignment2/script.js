
  const playPauseButton = document.querySelector("#play-pause-btn");
  playPauseButton.addEventListener("click", togglePlay);
  const playPauseImg = document.querySelector("#play-pause-img");
  
  const muteUnmuteButton = document.querySelector("#mute-unmute-btn");
  muteUnmuteButton.addEventListener("click", toggleAudio);
  const muteUnmuteImg = document.querySelector("#mute-unmute-img");
  
  const increaseVolumeButton = document.querySelector("#increase-volume-btn");
  increaseVolumeButton.addEventListener("click", increaseVolume);
  
  const decreaseVolumeButton = document.querySelector("#decrease-volume-btn");
  decreaseVolumeButton.addEventListener("click", decreaseVolume);
  
  let loop = false;
  const loopButton = document.querySelector("#loop-btn");
  loopButton.addEventListener("click", loopVideo); 
  
  const step1Button = document.querySelector("#step-1-btn");
  step1Button.addEventListener("click", gotoStep1);

  const step2Button = document.querySelector("#step-2-btn");
  step2Button.addEventListener("click", gotoStep2);
  
  const myVideo = document.querySelector("#my-video");

  const videoName = document.querySelector("#video-name");

  const progressBar = document.querySelector("#progress-bar-fill");
  
  // Event listener to check time update on video to update the progress bar __________________FOR BAR
  myVideo.addEventListener("timeupdate", updateProgressBar);
  
  // Event listener to check current volume
  myVideo.addEventListener("volumechange", updateVolume);
  
  // Event listener to check if the video is ended to replay it
  myVideo.addEventListener("ended", replay);
  
  const firstVideoButton = document.querySelector("#first-video-btn");
  
  firstVideoButton.addEventListener("click", function playIt() {
    myVideo.pause();
    playVideo(0);
  });
  
  function updateVolume() {
    const volume = myVideo.volume;
    console.log("Volume changed:", volume);
  }
  
  function increaseVolume() {
    if (myVideo.volume < 0.9) {
      myVideo.volume += 0.1;
    }
  }
  
  function decreaseVolume() {
    if (myVideo.volume > 0.11) {
      myVideo.volume -= 0.1;
    }
  }

  function gotoStep1() {
    myVideo.currentTime = 16.41;
  }

  function gotoStep2() {
    myVideo.currentTime = 0.01;
  }

  function togglePlay() {
    if (myVideo.paused || myVideo.ended) {
      myVideo.play();
      playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
    } else {
      myVideo.pause();
      playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
    }
  }
  
  function toggleAudio() {
    if (myVideo.muted) {
      myVideo.muted = false;
      muteUnmuteButton.style.backgroundColor = "#b2a3d5";
    } else {
      myVideo.muted = true;
      muteUnmuteButton.style.backgroundColor = "rgba(208, 89, 245, 0.7)";
    }
  }
  
  function loopVideo() {
    if (loop) {
      loop = false;
      loopButton.style.backgroundColor = "#b2a3d5";
    } else {
      loop = true;
      loopButton.style.backgroundColor = "rgba(208, 89, 245, 0.7)";
    }
    console.log("loop is", loop);
  }
  
  function updateProgressBar() {
    videoTime.textContent = myVideo.currentTime.toFixed(2);
    const value = (myVideo.currentTime / myVideo.duration) * 100;
    progressBar.style.width = value + "%";
  }
  


  //FULL SCREEEEEEEEEEEEEEEEEEN

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      myVideo.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }
  
  myVideo.addEventListener("dblclick", toggleFullscreen);
  
  document.addEventListener("fullscreenchange", function () {
    if (document.fullscreenElement === myVideo) {
      console.log("Entered fullscreen");
    } else {
      console.log("Exited fullscreen");
    }
  });