import React from "react";

export default function MessageBubble(props) {
  return (
    <div className={`mes-bubble-container ${props.className}`}>
    <div className="mes-bubble">
      <p>{props.mes}</p>
    </div>
    </div>
  );
}
