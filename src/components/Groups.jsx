import React from "react";
import { useGroups } from "../contexts/GroupsProvider";
import { useConversations } from "../contexts/ConversationsProvider";
import ContactBubble from "../utilities/ContactBubble";

export default function Groups() {
  const { groupConversations, selectGroupIndex } = useGroups();
  const { selectedConversation, selectConversationIndex } = useConversations();

  return (
    <div className="hist-contacts">
      {groupConversations.map((conversation, index) => {

        return (
          <ContactBubble
            key={index}
            contact={conversation.groupName}
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
