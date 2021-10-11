import React, { useState } from "react";
import CreateGroup from "./CreateGroup";
import ContactHeadBar from "./ContactHeadBar";
import UserId from "../utilities/UserId";
import AllContact from "./AllContact";
import Groups from "./Groups";
import Conversations from "./Conversations";
import AddContactModal from "./AddContactModal";
import NewConversation from "./NewConversation";

export default function ContactContainer({ id }) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showConversationModal, setShowConversationModal] = useState(false);
  const [showGroupModal, setShowGroupModal] = useState(false);

  const [displayConversation, setDisplayConversation] = useState(true);
  const [displayGroup, setDisplayGroup] = useState(false);
  const [displayContact, setDisplayContact] = useState(false);

  function handleOnAddModal() {
    setShowAddModal((prev) => !prev);
  }

  function handleOnConversationModal() {
    setShowConversationModal((prev) => !prev);
  }

  function handleDisplayConversation() {
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

  const contactDashboard = (
    <React.StrictMode>
      <ContactHeadBar
        conversation={handleDisplayConversation}
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
        openAddContactModal={handleOnAddModal}
        openConversationModal={handleOnConversationModal}
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
      {showAddModal && (
        <AddContactModal
          closeAddContactModal={handleOnAddModal}
          openAddContactModal={handleOnAddModal}
          openConversationModal={handleOnConversationModal}
        />
      )}
      {showConversationModal && (
        <NewConversation
          closeConversationModal={handleOnConversationModal}
          openAddContactModal={handleOnAddModal}
        />
      )}
      {contactDashboard}
    </div>
  );
}
