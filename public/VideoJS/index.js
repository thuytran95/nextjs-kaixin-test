// import "./style_video.css";
import React from "react";
import videojs from "video.js";
import { setupEmeOptions } from "../js/videojs-http-streaming";
// import styles from "./style.scss";

export default class VideoJS extends React.Component {
  ref = (node) => {
    this.videoNode = node;
  };

  // parentRef = (el) => {
  //   this.instance = el;
  // };
  componentDidMount() {
    // instantiate Video.js
    // this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
    //   console.log(this);
    //   window.VIDEOJS_NO_DYNAMIC_STYLE === true;
    // });
    this.player = window.player = window.videojs(
      this.videoNode,
      { ...this.props },
      function onPlayerReady() {
        this.play();
      }
    );
    console.log(this.player);
    const s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.innerHTML = `var videoEl = document.getElementById("myVideo");
    const option = {vhs: {
            overrideNative: true,
            withCredentials: true,
          }}
    const newOptions = Object.assign(videojs.options.html5, option );
    // console.log(videojs.options.html5);
    console.log(videojs.options);
    
    // console.log(videojs.options);
    // var player = window.player = window.videojs(videoEl, {
    //   html5: {
    //     vhs: {
    //       overrideNative: true,
    //       withCredentials: true,
    //     },
    //   },
    // });

    player.play();`;
    this.instance.appendChild(s);
    // {
    //   html5: {
    //     vhs: {
    //       overrideNative: true,
    //     },
    //   },
    // },
  }

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
          // ref={(node) => (this.videoNode = node)}
          ref={this.ref}
          className="vjs-default-skin"
          controls
        >
          <source src={this.props.src}></source>
        </video-js>
      </div>
    );
  }
}
