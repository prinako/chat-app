import React from "react";
import ContactBubble from "../utilities/ContactBubble";
import { useConversations } from "../contexts/ConversationsProvider";


export default function Conversations({ openAddContactModal }) {
    const {conversations} = useConversations()
console.log(conversations)

  return (
    <div className="hist-contacts">
      {conversations.forEach(conversation=>{

      <ContactBubble keys={conversation.id} content={conversation.recipients.name} />
      })}
    </div>
  );
}
