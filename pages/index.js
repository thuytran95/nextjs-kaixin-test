import Head from "next/head";
import styles from "../styles/Home.module.css";

import Header from "../public/Header";
import MessengerChat from "../public/Messenger";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://unpkg.com/video.js/dist/video-js.css"
          rel="stylesheet"
          type="text/css"
        />
        <script src="js/videojs-core.js" type="text/javascript"></script>
        <script
          src="js/videojs-http-streaming.js"
          type="text/javascript"
        ></script>
        <script src="js/control-video.js" type="text/javascript"></script>
      </Head>
      <Header />
      <h1>Trang home</h1>
      <video-js
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
      </video-js>
      <MessengerChat pageId="105674048286261" htmlRef="fb-msgr" />
    </div>
  );
}
