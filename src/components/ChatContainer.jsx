import React, { useState } from "react";
import MessageContainer from "./utilities/MessageContainer";
import WriteSend from "./utilities/WriteSend";

export default function Room(props) {
  const [isMessage, setMessage] = useState([]);

  function handleOnChange(newMessage) {
    setMessage((prevMes) => {
      return [...prevMes, newMessage];
    });
  }

  return (
    <div className="msg-container">
      <div className="chat-arear">
        <MessageContainer
          className="text-msg-wrapper-sended"
          classSender="message-bubble-sended"
          mes={isMessage}
        />
      </div>
      <WriteSend onChange={handleOnChange} className="send-btn" text="send" />
    </div>
  );
}
