import React, { useState } from "react";
import MessageContainer from "./MessageContainer";
import Textarea from "../utilities/Textarea";
import Button from "../utilities/Button";
import SendIcon from "@mui/icons-material/Send";
import ChatRoomNavBar from "./ChatRoomNavbar";
import { useConversations } from "../contexts/ConversationsProvider";
import { useGroups } from "../contexts/GroupsProvider";

export default function ChatRoom() {
  const [text, setText] = useState("");

  const { sendMessage, selectedConversation } = useConversations();

  const { sendMessageToGroup, selectedGroup } = useGroups();

  function handleOnChange(e) {
    e.preventDefault();

    selectedConversation
      ? sendMessage(
          selectedConversation.recipients.map((r) => r.id),
          text
        )
      : sendMessageToGroup(
          selectedGroup.recipients.map((r) => r.id),
          text
        );

    setText("");
  }

  return (
    <div className="msg-container">
      <ChatRoomNavBar />
      <div className="chat-arear">
        <MessageContainer
          selectedGroup={selectedGroup}
          selectedConversation={selectedConversation}
        />
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
