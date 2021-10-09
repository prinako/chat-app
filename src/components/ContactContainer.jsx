import React, { useState } from "react";
import CreateGroup from "./CreateGroup";
import ContactHeadBar from "../utilities/ContactHeadBar";
import UserId from "../utilities/UserId";
import AllContact from "./AllContact";
import Groups from "./Groups";
import Conversations from "./Conversations";
import AddContactModal from "./AddContactModal";

export default function ContactContainer({ id }) {
  const [showAddModal, setShowAddModal] = useState(false);

  const [displayConversation, setDisplayConversation] = useState(true);
  const [displayGroup, setDisplayGroup] = useState(false);
  const [displayContact, setDisplayContact] = useState(false);

  function handleOntoggle() {
    setShowAddModal((prev) => !prev);
  }

  function handleDisplayConverstion() {
    setDisplayConversation(true);

    displayGroup && setDisplayGroup(false);
    displayContact && setDisplayContact(false);
  }

  function handleDisplayContact() {
    setDisplayContact(true);

    displayConversation && setDisplayConversation(false);
    displayGroup && setDisplayGroup(false);
  }

  function handleDisplayGroup() {
    setDisplayGroup(true);

    displayConversation && setDisplayConversation(false);
    displayContact && setDisplayContact(false);
  }

  const contactDashboad = (
    <React.StrictMode>
      <ContactHeadBar
        conversation={handleDisplayConverstion}
        activeConversation={displayConversation}
        group={handleDisplayGroup}
        activeGroup={displayGroup}
        contact={handleDisplayContact}
        activeContact={displayContact}
      />

      {displayConversation && <Conversations />}
      {displayGroup && <Groups />}
      {displayContact && <AllContact />}
      {displayConversation && <UserId id={id} />}

      <CreateGroup
        openAddContactModal={handleOntoggle}
        activeConversation={displayConversation}
        activeGroup={displayGroup}
        activeContact={displayContact}
      />
    </React.StrictMode>
  );
  return (
    <div
      className={`contact-container show ${
        displayConversation && "on-conversation"
      }`}
    >
      {showAddModal ? (
        <AddContactModal closeAddContactModal={handleOntoggle} />
      ) : (
        contactDashboad
      )}
    </div>
  );
}
