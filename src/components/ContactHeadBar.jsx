import React from "react";
import ForumIcon from "@mui/icons-material/Forum";
import GroupsIcon from "@mui/icons-material/Groups";
import RecentActorsIcon from "@mui/icons-material/RecentActors";

export default function ContactHeadBar({
  conversation,
  group,
  contact,
  activeContact,
  activeConversation,
  activeGroup,
}) {
  return (
    <div className="contact-wrapper">
      <div
        onClick={conversation}
        className={`all-msg ${activeConversation && "active"} ${
          activeGroup && "border-radius-bottom-r"
        }`}
      >
        <ForumIcon /> <span className="ml-05">Chats</span>
      </div>
      <div
        onClick={group}
        className={`all-groups ${activeGroup && "active"} ${
          activeConversation && "border-radius-bottom-l"
        } ${activeContact && "border-radius-bottom-r"}`}
      >
        <GroupsIcon /> <span className="ml-05">Groups</span>
      </div>
    </div>
  );
}
