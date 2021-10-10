import React, { useState, useEffect } from "react";
import ContactBubble from "../utilities/ContactBubble";
import { useContacts } from "../contexts/ContactsProvider";
import { useConversations } from "../contexts/ConversationsProvider";
import Button from "../utilities/Button";

export default function NewConversation({ closeConversationModal }) {
  const [selectedContactIds, setSelectedContactIds] = useState([]);
  const { contacts } = useContacts();
  const { createNewConversation } = useConversations();

  function createConversation() {
    console.log(selectedContactIds);
    createNewConversation(selectedContactIds);
  }

  function handleOnClick(contactid) {
    console.log(contactid);
    setSelectedContactIds((prevSelectedContactsIds) => {
      if (prevSelectedContactsIds.includes(contactid)) {
        return prevSelectedContactsIds.filter((prevId) => {
          return contactid !== prevId;
        });
      } else {
        return [...prevSelectedContactsIds, contactid];
      }
    });
    createConversation();
  }

  return (
    <div className="conversation-container">
      <div className="conversation-title">New Conversation</div>
      <div className="hist-contacts">
        {contacts.map((contact) => {
          return (
            <ContactBubble
              onClick={() => {
                console.log(contact.id);
                handleOnClick(contact.id);
              }}
              role="button"
              key={contact.id}
              contact={contact.name}
            />
          );
        })}
      </div>
      <div className="conversation-btn-container">
        <Button
          onClick={closeConversationModal}
          className="btn cancel-btn"
          text="Cancel"
        />
      </div>
    </div>
  );
}
