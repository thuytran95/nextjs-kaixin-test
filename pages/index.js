import Head from "next/head";

import Header from "../public/Header";
import MessengerChat from "../public/Messenger";
import ReactHLS from 'react-hls';

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

        {/* <script src="https://unpkg.com/video.js@6.4.0/dist/video.js"></script>
        <script src="https://unpkg.com/videojs-flash@2.0.1/dist/videojs-flash.js"></script>
        <script src="https://unpkg.com/videojs-contrib-hls@5.12.2/dist/videojs-contrib-hls.js"></script>
        <script src="js/videojs-http-streaming.js"></script> */}
        <script src="https://unpkg.com/video.js/dist/video.js"></script>
        <script src="https://unpkg.com/@videojs/http-streaming/dist/videojs-http-streaming.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
      </Head>
      <Header />
      <h1>Trang home</h1>
      <ReactHLS url='https://file.mentor.vn/files/lessons/output/file-1618296136502/playlist.m3u8'/>
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
      {/* <VideoJS></VideoJS> */}
      {/* <VideoReact url="https://file.mentor.vn/files/lessons/output/file-1614840748161/playlist.m3u8"></VideoReact> */}
      <MessengerChat pageId="105674048286261" htmlRef="fb-msgr" />
    </div>
  );
}
