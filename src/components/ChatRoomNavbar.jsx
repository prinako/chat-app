import React from "react";
import Button from "../utilities/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import VideocamIcon from "@mui/icons-material/Videocam";
import CallIcon from "@mui/icons-material/Call";
import { useConversations } from "../contexts/ConversationsProvider";
import { useGroups } from "../contexts/GroupsProvider";

export default function ChatRoomNavbar() {
  const { selectConversationIndex, selectedConversation } = useConversations();
  const { selectGroupIndex, selectedGroup } = useGroups();

  return (
    <div className="navbar">
      <Button
        onClick={() =>
          selectedConversation
            ? selectConversationIndex("")
            : selectGroupIndex("")
        }
        className={`btn menu`}
        text={<ArrowBackIcon />}
      />
      <div className="brand">
        <span className="text">
          {selectedConversation
            ? selectedConversation.recipients.map((r) => r.name).join(", ")
            : selectedGroup.groupName}
        </span>
      </div>
      <div className="call-container">
        <Button
          id="call-btn-video"
          className="btn call-btn-video"
          text={<VideocamIcon />}
        />
        <Button
          id="call-btn-voice"
          className="btn call-btn-voice"
          text={<CallIcon />}
        />
      </div>
    </div>
  );
}
