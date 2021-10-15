import React from "react";
import ContactContainer from "./ContactContainer";
import ChatRoom from "./ChatRoom";
import { useConversations } from "../contexts/ConversationsProvider";

export default function Chat({ id }) {
  const { selectedConversation } = useConversations();
  console.log(selectedConversation)
  return (
    <div className="container">
      <div className="msg-arear">
        <ContactContainer id={id} />
        {selectedConversation && <ChatRoom />}
      </div>
    </div>
  );
}
