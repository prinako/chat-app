import React from "react";
import Menu from "./Menu";
import Room from "./Room";
import ChatHeader from "./utilities/ChatHeader";

export default function Chat(props) {
  return (
    <React.StrictMode>
      <div className="chat-container">
          <ChatHeader className="message-head pd-05" />
        <div className="chat-wrapper">
          <Menu />
          <Room />
        </div>
      </div>
    </React.StrictMode>
  );
}
