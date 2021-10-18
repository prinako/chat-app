import React, { useCallback } from "react";
import MessageBubble from "../utilities/MessageBubble";

export default function MessageContainer({
  selectedConversation,
  selectedGroup,
}) {
  const setRef = useCallback((node) => {
    if (node) {
      node.scrollIntoView({ smooth: true });
    }
  }, []);

  return (
    <React.StrictMode>
      {selectedConversation
        ? selectedConversation.messages.map((mes, index) => {
            const lastMessage =
              selectedConversation.messages.length - 1 === index;
            return (
              <div
                ref={lastMessage ? setRef : null}
                key={index.toString()}
                id={index}
                className={`message-bubble  ${
                  mes.forMe ? "message-bubble-sended" : "message-bubble-recived"
                }`}
              >
                <MessageBubble
                  className={
                    mes.forMe
                      ? "text-msg-wrapper-sended"
                      : "text-msg-wrapper-received"
                  }
                  mes={mes.text}
                  name={mes.forMe ? "You" : mes.senderName}
                />
              </div>
            );
          })
        : selectedGroup.messages.map((mes, index) => {
            const lastMessage =
            selectedGroup.messages.length - 1 === index;
            return (
              <div
                ref={lastMessage ? setRef : null}
                key={index.toString()}
                id={index}
                className={`message-bubble  ${
                  mes.forMe ? "message-bubble-sended" : "message-bubble-recived"
                }`}
              >
                <MessageBubble
                  className={
                    mes.forMe
                      ? "text-msg-wrapper-sended"
                      : "text-msg-wrapper-received"
                  }
                  mes={mes.text}
                  name={mes.forMe ? "You" : mes.senderName}
                />
              </div>
            );
          })}
    </React.StrictMode>
  );
}
