var overrideNative = false;

var player = videojs("example-video", {
  html5: {
    hls: {
      overrideNative: overrideNative,
    },
    nativeVideoTracks: !overrideNative,
    nativeAudioTracks: !overrideNative,
    nativeTextTracks: !overrideNative,
  },
});
player.play();
