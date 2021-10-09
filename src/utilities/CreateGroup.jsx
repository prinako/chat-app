import React from "react";
import ContactsIcon from "@mui/icons-material/Contacts";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

export default function CreateGroup({openAddContactModal}) {
  return (
    <div className="create-group-container">
      <div className="add-contact" onClick={openAddContactModal}>
        <ContactsIcon /> <span className="ml-05">Add Contact</span>
      </div>
      <div className="btn create-group">
        <GroupAddIcon /> <span className="ml-05">Create Group</span>
      </div>
    </div>
  );
}
