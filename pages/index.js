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
      </Head>
      <Header />
      <h1>Trang home</h1>
      <MessengerChat pageId="105674048286261" htmlRef="fb-msgr" />
    </div>
  );
}
