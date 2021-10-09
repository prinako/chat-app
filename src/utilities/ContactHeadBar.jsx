import React from "react";
import ForumIcon from "@mui/icons-material/Forum";
import GroupsIcon from '@mui/icons-material/Groups';
import RecentActorsIcon from '@mui/icons-material/RecentActors';

export default function ContactHeadBar() {
  return (
    <div className="contact-wrapper">
      <div className="all-msg"><ForumIcon /> <span className="ml-05">All</span></div>
      <div className="all-groups"><GroupsIcon /> <span className="ml-05">Groups</span></div>
      <div className="all-groups"><RecentActorsIcon /> <span className="ml-05">Contacts</span></div>
    </div>
  );
}
