import React from "react";
import ContactContainer from "./ContactContainer";
import ChatRoom from "./ChatRoom";
import { useConversations } from "../contexts/ConversationsProvider";
import { useGroups } from "../contexts/GroupsProvider";


export default function Chat({ id }) {
  const { selectedConversation } = useConversations();
  const {selectedGroup} = useGroups();
  console.log(selectedGroup)
  
  return (
    <div className="container">
      <div className="msg-arear">
        <ContactContainer id={id} />
        {selectedConversation && <ChatRoom />}
        {selectedGroup && <ChatRoom />}
      </div>
    </div>
  );
}
