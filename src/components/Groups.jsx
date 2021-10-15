import React from "react";
import { useGroups } from "../contexts/GroupsProvider";
import { useConversations } from "../contexts/ConversationsProvider";
import ContactBubble from "../utilities/ContactBubble";

export default function Groups() {
  const { groupConversations, selectGroupIndex } = useGroups();

  const { selectedConversation, selectConversationIndex } = useConversations();

  console.log(groupConversations);
  return (
    <div className="hist-contacts">
      {groupConversations.map((conversation, index) => {
        return (
          <ContactBubble
            key={index}
            contact={conversation.recipients.map((r) => r.name).join(", ")}
            onClick={() => {
              selectGroupIndex(index);
              selectedConversation && selectConversationIndex("");
            }}
          />
        );
      })}
    </div>
  );
}
