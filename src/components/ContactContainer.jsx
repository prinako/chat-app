import React, { useState } from "react";
import CreateGroup from "../utilities/CreateGroup";
import ContactHeadBar from "../utilities/ContactHeadBar";
import DisplayAllContact from "./DisplayAllContact";
import AddContactModal from "./AddContactModal";

export default function ContactContainer() {
  const [showAddModal, setShowAddModal] = useState(false);

  function handleOntoggle() {
    setShowAddModal((prev) => !prev);
  }

  const contactDashboad = (
    <React.StrictMode>
      <ContactHeadBar />
      <DisplayAllContact />
      <CreateGroup openAddContactModal={handleOntoggle} />
    </React.StrictMode>
  );
  return (
    <div className="contact-container show">
      {showAddModal ? (
        <AddContactModal closeAddContactModal={handleOntoggle} />
      ) : (
        contactDashboad
      )}
    </div>
  );
}
