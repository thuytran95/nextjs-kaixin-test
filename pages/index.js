import Head from "next/head";
import styles from "../styles/Home.module.css";

import Header from "../public/Header";
import MessengerChat from "../public/Messenger";
import VideoJS from "../public/VideoJS";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href=" https://unpkg.com/video.js@7.0.0/dist/video-js.css"
          rel="stylesheet"
          type="text/css"
        />

        <script src="https://unpkg.com/video.js@6.4.0/dist/video.js"></script>
        <script src="https://unpkg.com/videojs-flash@2.0.1/dist/videojs-flash.js"></script>
        <script src="https://unpkg.com/videojs-contrib-hls@5.12.2/dist/videojs-contrib-hls.js"></script>
        <script src="js/videojs-http-streaming.js"></script>
      </Head>
      <Header />
      <h1>Trang home</h1>
      {/* <video-js
        id="my_video_1"
        class="vjs-default-skin vjs-16-9"
        controls
        preload="auto"
        width="100%"
        height="350"
      >
        <source
          src="https://file.mentor.vn/files/lessons/output/file-1614840748161/playlist.m3u8"
          type="application/x-mpegURL"
        />
      </video-js> */}
      <VideoJS></VideoJS>
      <MessengerChat pageId="105674048286261" htmlRef="fb-msgr" />
    </div>
  );
}
