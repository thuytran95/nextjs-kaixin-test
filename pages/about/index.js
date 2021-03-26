import React, { Component } from "react";
import Header from "../../public/Header";
import MessengerChat from "../../public/Messenger";

export default class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>This is about page</h1>
        <MessengerChat pageId="107851557422909" htmlRef="fb-msgr" />
      </div>
    );
  }
}
