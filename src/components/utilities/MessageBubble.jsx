import React from "react";

export default function MessageBubble(props) {
  return (
    <div className={`text-msg-wrapper ${props.className}`}>
        <p className="text-message">{props.mes}</p>
        <span className="sender-name">{props.name}</span>
    </div>
  );
}
