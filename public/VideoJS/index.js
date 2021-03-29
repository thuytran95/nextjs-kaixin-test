// import "./style_video.css";
import React from "react";
import videojs from "video.js";
import { setupEmeOptions } from "../js/videojs-http-streaming";
// import styles from "./style.scss";

export default class VideoJS extends React.Component {
  // parentRef = (el) => {
  //   this.instance = el;
  // };
  componentDidMount() {
    // instantiate Video.js
    // this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
    //   console.log(this);
    //   window.VIDEOJS_NO_DYNAMIC_STYLE === true;
    // });
    var overrideNative = false;
    this.player = videojs(this.videoNode, {
      hls: {
        overrideNative: overrideNative,
      },
      nativeVideoTracks: !overrideNative,
      nativeAudioTracks: !overrideNative,
      nativeTextTracks: !overrideNative,
    });
    this.player.play();
    // console.log(this.player);
    // const s = document.createElement("script");
    // s.type = "text/javascript";
    // s.async = true;
    // s.innerHTML = `var videoEl = document.getElementById("myVideo");
    //   var overrideNative = false;
    //   videojs.options.html5 = {

    //   };
  }

  // nativeVideoTracks: !overrideNative,
  // nativeAudioTracks: !overrideNative,
  // nativeTextTracks: !overrideNative,
  // vhs: {
  //   overrideNative: overrideNative,
  //   withCredentials: true,
  // },

  shouldComponentUpdate(prevProps) {
    if (this.props.src !== prevProps.src) {
      console.log("change source");
      // this.player.dispose();
    }
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  render() {
    console.log("render");

    return (
      <div ref={(el) => (this.instance = el)}>
        <video-js
          id="myVideo"
          ref={(node) => (this.videoNode = node)}
          className="vjs-default-skin"
          controls
        >
          <source
            src="
              https://file.mentor.vn/files/lessons/output/file-1614840748161/playlist.m3u8"
            type="application/x-mpegURL"
          ></source>
        </video-js>
      </div>
    );
  }
}
