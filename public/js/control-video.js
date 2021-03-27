var videoEl = document.getElementById("my_video_1");
var player = (window.player = window.videojs(videoEl, {
  html5: {
    vhs: {
      overrideNative: true,
      withCredentials: true,
    },
  },
}));

player.play();
