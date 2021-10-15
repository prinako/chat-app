import React, { useState } from "react";
import ContactBubble from "../utilities/ContactBubble";
import { useContacts } from "../contexts/ContactsProvider";
import { useConversations } from "../contexts/ConversationsProvider";
import Button from "../utilities/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

export default function NewConversation({
  closeConversationModal,
  openAddContactModal,
}) {
  const [selectedContactIds, setSelectedContactIds] = useState([]);
  const { contacts } = useContacts();
  const { conversations, createNewConversation } = useConversations();

  function createConversation(contactid) {
    const recipients = conversations.map((c) => c.recipients);
    const allContactsId = recipients.map((r) => r[0].id);

    if (allContactsId.includes(contactid)) {
      alert("contact is already added");
    } else {
      createNewConversation(selectedContactIds);
    }
    return closeConversationModal();
  }

  function handleOnMouseOver(contactid) {
    setSelectedContactIds(() => [contactid]);
  }

  return (
    <div className="conversation-container">
      <div className="conversation-wrapper">
        <div className="conversation-title">
          <Button
            onClick={closeConversationModal}
            className={`btn`}
            text={<ArrowBackIcon />}
          />
          <div className="brand">
            <span className="text">New Conversation</span>
          </div>
        </div>
        <div
          className="icon-bobble"
          onClick={() => {
            openAddContactModal();
            closeConversationModal();
          }}
        >
          <GroupAddIcon />
        </div>
        <div className="hist-contacts">
          {contacts.map((contact) => {
            return (
              <ContactBubble
                onClick={() => {
                  createConversation(contact.id);
                }}
                onMouseOver={() => {
                  handleOnMouseOver(contact.id);
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
    </div>
  );
}
