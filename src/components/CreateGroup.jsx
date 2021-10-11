import React from "react";
import ContactsIcon from "@mui/icons-material/Contacts";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCommentIcon from "@mui/icons-material/AddComment";

export default function CreateGroup({
  openAddContactModal,
  openConversationModal,
  activeConversation,
  activeGroup,
  activeContact,
}) {
  return (
    <div className="create-group-container">
      {activeConversation && (
        <div className="icon-bobble" onClick={openConversationModal}>
          <AddCommentIcon />
        </div>
      )}
      {activeGroup && (
        <div className="btn create-group">
          <GroupAddIcon /> <span className="ml-05">Create Group</span>
        </div>
      )}
      {activeContact && (
        <div className="icon-bobble" onClick={openAddContactModal}>
          <ContactsIcon />
        </div>
      )}
    </div>
  );
}
