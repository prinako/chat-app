import React from "react";
import ForumIcon from "@mui/icons-material/Forum";
import GroupsIcon from '@mui/icons-material/Groups';

export default function ContactHeadBar() {
  return (
    <div className="contact-wrapper">
      <div className="all-msg">{<ForumIcon/>} All</div>
      <div className="all-groups"><GroupsIcon/> Groups</div>
    </div>
  );
}
