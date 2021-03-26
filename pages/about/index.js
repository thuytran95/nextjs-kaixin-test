import React, { Component } from "react";
import Header from "../../public/Header";
import MessengerChat from "../../public/Messenger";

export default class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>This is about page</h1>
        <MessengerChat pageId="105674048286261" htmlRef="fb-msgr" />
      </div>
    );
  }
}
