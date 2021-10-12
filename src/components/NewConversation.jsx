import React, { useState, useEffect } from "react";
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

  function createConversation() {
    console.log(selectedContactIds);
    console.log("hi ", conversations.recipients)
    createNewConversation(selectedContactIds);
  }
useEffect(()=>{
  createNewConversation(selectedContactIds);
},[selectedContactIds])

  function handleOnClick(contactid) {
    const recipients = conversations.map(c=>c.recipients)
    console.log("hi ", recipients)
    console.log(recipients.includes(contactid));
    console.log(contactid);

    setSelectedContactIds((prevSelectedContactsIds) => {
      if (recipients.includes(contactid)) {
        return recipients.filter((prevId) => {
          console.log("yoo", prevId)
          return contactid !== prevId;
        });
      } else {
        return [contactid];
      }
    });
    if(selectedContactIds.length !== 0){
    }
    console.log("not" ,selectedContactIds.length)

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
    </div>
  );
}
