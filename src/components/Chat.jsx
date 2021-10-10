import React from "react";
import ContactContainer from "./ContactContainer";
import ChatContainer from "./ChatContainer";
import Navbar from "./Navbar";


export default function Chat({id}) {
  return (
      <div className="container">
        <Navbar className="" />
        <div className="msg-arear">
          <ContactContainer id={id}/>
          <ChatContainer />
        </div>
      </div>
  );
}
