import React from "react";
import ContactBubble from "../utilities/ContactBubble";
import { useConversations } from "../contexts/ConversationsProvider";
import { useGroups } from "../contexts/GroupsProvider";

export default function Conversations() {
  const { conversations, selectConversationIndex } = useConversations();

  const { selectedGroup, selectGroupIndex } = useGroups();

  return (
    <div className="hist-contacts">
      {conversations.map((conversation, index) => {
        return (
          <ContactBubble
            key={index}
            contact={conversation.recipients.map((r) => {
              return r.name;
            })}
            onClick={() => {
              selectConversationIndex(index);
              selectedGroup && selectGroupIndex("");
            }}
          />
        );
      })}
    </div>
  );
}
