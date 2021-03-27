// import "./style_video.css";
import React from "react";
import videojs from "video.js";
// import styles from "./style.scss";

export default class VideoJS extends React.Component {
  componentDidMount() {
    // instantiate Video.js
    // this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
    //   console.log(this);
    //   window.VIDEOJS_NO_DYNAMIC_STYLE === true;
    // });
    this.player = window.player = window.videojs(
      this.videoNode,
      this.props,
      function onPlayerReady() {}
    );
    console.log(this.player);
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
    console.log(this.props);
    return (
      <div>
        <video-js
          id="myVideo"
          ref={(node) => (this.videoNode = node)}
          className="video-js vjs-default-skin"
        >
          <source src={this.props.src}></source>
        </video-js>
      </div>
    );
  }
}
