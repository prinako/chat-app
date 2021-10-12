import React from "react";
import ContactBubble from "../utilities/ContactBubble";
import { useConversations } from "../contexts/ConversationsProvider";

export default function Conversations({ openAddContactModal }) {
  const { conversations, selectConversationIndex } = useConversations();

  return (
    <div className="hist-contacts">
      {conversations.map((conversation, index) => {
        return (
          <ContactBubble
            key={index}
            contact={conversation.recipients.map((r) => {
              return r.name;
            })}
            onClick={() => selectConversationIndex(index)}
          />
        );
      })}
    </div>
  );
}
