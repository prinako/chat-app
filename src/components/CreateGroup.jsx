import React from "react";
import ContactsIcon from "@mui/icons-material/Contacts";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCommentIcon from '@mui/icons-material/AddComment';

export default function CreateGroup({
  openAddContactModal,
  activeConversation,
  activeGroup,
  activeContact,
}) {
  return (
    <div className="create-group-container">
      {activeConversation && (
        <div className="add-contact" onClick={openAddContactModal}>
          <AddCommentIcon /> <span className="ml-05">New Conversation</span>
        </div>
      )}
      {activeGroup && (
        <div className="btn create-group">
          <GroupAddIcon /> <span className="ml-05">Create Group</span>
        </div>
      )}
      {activeContact && (
        <div className="add-contact" onClick={openAddContactModal}>
          <ContactsIcon /> <span className="ml-05">Add Contact</span>
        </div>
      )}
    </div>
  );
}
