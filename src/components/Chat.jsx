import React from "react";
import ContactContainer from "./ContactContainer";
import ChatContainer from "./ChatContainer";
import Navbar from "./Navbar";

export default function Chat(props) {
  return (
    <React.StrictMode>
      <div className="container">
        <Navbar className="" />
        <div className="msg-arear">
          <ContactContainer />
          <ChatContainer />
        </div>
      </div>
    </React.StrictMode>
  );
}
