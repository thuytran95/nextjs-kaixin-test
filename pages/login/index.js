import Header from "../../public/Header";
import MessengerChat from "../../public/Messenger";

function Home() {
  return (
    <div>
      <Header />
      <h1>Trang login</h1>
      <MessengerChat pageId="105674048286261" htmlRef="fb-msgr" />
    </div>
  );
}

export default Home;
