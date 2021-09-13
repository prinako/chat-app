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
    <div className="message-container">
      <div className="message-wrapper">
        <MessageContainer mes={isMessage} />
      </div>
      <WriteSend onChange={handleOnChange} className="send-btn" text="send" />
    </div>
  );
}
