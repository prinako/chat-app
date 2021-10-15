import React from "react";
import Button from "../utilities/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import VideocamIcon from "@mui/icons-material/Videocam";
import CallIcon from "@mui/icons-material/Call";
import { useConversations } from "../contexts/ConversationsProvider";

export default function Navbar(props) {
  const { selectConversationIndex, selectedConversation } = useConversations();

  return (
    <div className="navbar">
      <Button
        onClick={() => selectConversationIndex("")}
        className={`btn`}
        text={<ArrowBackIcon />}
      />
      <div className="brand">
        <span className="text">
          {selectedConversation.recipients.map((r) => r.name).join(", ")}
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
