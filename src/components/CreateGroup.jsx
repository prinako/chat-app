import React from "react";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCommentIcon from "@mui/icons-material/AddComment";

export default function CreateGroup({
  openConversationModal,
  openGroupModal,
  activeConversation,
  activeGroup,
}) {
  return (
    <div className="create-group-container">
      {activeConversation && (
        <div className="icon-bobble" onClick={openConversationModal}>
          <AddCommentIcon />
        </div>
      )}
      {activeGroup && (
        <div onClick={openGroupModal} className="btn create-group">
          <GroupAddIcon /> <span className="ml-05">Create Group</span>
        </div>
      )}
    </div>
  );
}
