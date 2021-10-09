import React from "react";
import MessageBubble from "./MessageBubble";

export default function MessageContainer(props) {
  const isMessage = props.mes;
  return (
    <React.StrictMode>
      Right siad
      {isMessage.map((mes, index) => {
        return (
          <div key={index.toString()} id={index} className={`message-bubble ${props.classSender}`}>
            <MessageBubble className={props.className}  mes={mes} />
          </div>
        );
      })}
    </React.StrictMode>
  );
}
