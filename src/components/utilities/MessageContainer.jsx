import React from "react";
import MessageBubble from "./MessageBubble";

export default function MessageContainer(props) {
  const isMessage = props.mes;
  return (
    <div className="message">
      Right siad
      {isMessage.map((mes, index) => {
        return <MessageBubble key={index} id={index} mes={mes} />;
      })}
    </div>
  );
}
