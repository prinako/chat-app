import React, { useState } from "react";
import MessageContainer from "./MessageContainer";
import Textarea from "../utilities/Textarea";
import Button from "../utilities/Button";
import SendIcon from "@mui/icons-material/Send";
import ChatRoomNavBar from "./ChatRoomNavbar";
import { useConversations } from "../contexts/ConversationsProvider";

export default function ChatRoom() {
  const [text, setText] = useState("");

  const { sendMessage, selectedConversation } = useConversations();

  function handleOnChange(e) {
    e.preventDefault();

    sendMessage(
      selectedConversation.recipients.map((r) => r.id),
      text
    );
    setText("");
  }

  return (
    <div  className="msg-container">
      <ChatRoomNavBar />
      <div className="chat-arear">
        <MessageContainer selectedConversation={selectedConversation} />
      </div>
      <form className="input-container" onSubmit={handleOnChange}>
        <Textarea
          value={text}
          required
          onChange={(e) => setText(e)}
          placeHolder="message..."
        />
        <Button
          className="btn send-btn"
          type="submit"
          text={<SendIcon fontSize="large" />}
        />
      </form>
    </div>
  );
}
