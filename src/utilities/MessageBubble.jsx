import React from "react";

export default function MessageBubble(props) {
  return (
    <>
      <p className={`text-msg-wrapper  ${props.className}`}>
        {props.mes}
      </p>
      <div className={`sender-name`}>{props.name}</div>
    </>
  );
}
