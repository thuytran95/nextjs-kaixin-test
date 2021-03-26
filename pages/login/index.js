import Header from "../../public/Header";
import MessengerChat from "../../public/Messenger";

function Home() {
  return (
    <div>
      <Header />
      <h1>Trang login</h1>
      <MessengerChat pageId="107851557422909" htmlRef="fb-msgr" />
    </div>
  );
}

export default Home;
