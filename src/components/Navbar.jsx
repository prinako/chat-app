import React from "react";
import Button from "./utilities/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import VideocamIcon from "@mui/icons-material/Videocam";
import CallIcon from "@mui/icons-material/Call";

export default function Navbar(props) {
  return (
    <div className="navbar">
      <Button className={`btn ${props.className}`} text={<ArrowBackIcon />} />
      <div className="brand">
        <span className="text">Connect ME</span>
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
