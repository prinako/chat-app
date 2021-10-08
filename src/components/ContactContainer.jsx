import React from "react";
import CreateGroup from "./utilities/CreateGroup";
import ContactHeadBar from "./utilities/ContactHeadBar";
import DisplayAllContact from "./DisplayAllContact";

export default function ContactContainer() {
  return (
    <div className="contact-container show">
      <ContactHeadBar/>
      <DisplayAllContact/>
      <CreateGroup />
    </div>
  );
}
