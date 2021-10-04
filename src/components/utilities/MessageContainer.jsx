import React from "react";
import MessageBubble from "./MessageBubble";

export default function MessageContainer(props) {
  const isMessage = props.mes;
  return (
    <React.StrictMode>
      Right siad
      {isMessage.map((mes, index) => {
        return (
          <div className={`message-bubble ${props.classSender}`}>
            <MessageBubble className={props.className} key={index} id={index} mes={mes} />
          </div>
        );
      })}
    </React.StrictMode>
  );
}
