import React from "react";
import ContactsIcon from "@mui/icons-material/Contacts";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

export default function CreateGroup() {
  return (
    <div className="create-group-container">
      <div className="add-contact">
        <ContactsIcon /> Add Contact
      </div>
      <div className="btn create-group">
        <GroupAddIcon /> Create Group
      </div>
    </div>
  );
}
