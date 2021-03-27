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

        <script
          src="https://unpkg.com/video.js@7.0.0/dist/video.min.js"
          type="text/javascript"
        ></script>
        <script
          src="js/videojs-http-streaming.js"
          type="text/javascript"
        ></script>
        <script src="https://unpkg.com/videojs-flash@2.0.1/dist/videojs-flash.js"></script>

        {/* <script src="js/control-video.js" type="text/javascript"></script> */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
                console.log('Console message');
                var videoEl = document.getElementById("my_video_1");
                  var player = window.player = window.videojs(videoEl, {
                    html5: {
                      vhs: {
                        overrideNative: true,
                        withCredentials: true,
                      },
                    },
                  });

                  player.play();

              `,
          }}
        /> */}
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
      <VideoJS
        // options={{
        //   html5: {
        //     vhs: {
        //       overrideNative: true,
        //     },
        //     nativeAudioTracks: false,
        //     nativeVideoTracks: false,
        //   },
        // }}
        // id="my_video_1"
        // class="vjs-default-skin vjs-16-9"
        src="https://file.mentor.vn/files/lessons/output/file-1614840748161/playlist.m3u8"
      ></VideoJS>
      <MessengerChat pageId="105674048286261" htmlRef="fb-msgr" />
    </div>
  );
}
