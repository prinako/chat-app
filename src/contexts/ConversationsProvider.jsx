import React, { useState, useContext, useEffect, useCallback } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useContacts } from "./ContactsProvider";
import { useSocket } from "./SocketProvider";

const ConversationContext = React.createContext();

export function useConversations() {
  return useContext(ConversationContext);
}

export function ConversationProvider({ id, children }) {
  const [conversations, setConversastion] = useLocalStorage("conversation", []);
  const [selectedConversationIndex, setSelectedConversationIndex] = useState(0);

  const { contacts } = useContacts();
  const socket = useSocket();

  function createNewConversation(recipients) {
    console.log(recipients)
    setConversastion((prevConversations) => {
      return [...prevConversations, { recipients, messages: [] }];
    });
  }

  const addMessageToConversation = useCallback(
    ({ recipients, text, sender }) => {
      setConversastion((prevConversations) => {
        let madeChange = false;

        const newMessage = { sender, text };
        const newConversations = prevConversations.map((conversation) => {
          if (arrayEquality(conversation.recipients, recipients)) {
            madeChange = true;
            return {
              ...conversation,
              messages: [...conversation.messages, newMessage],
            };
          }

          return conversation;
        });
        if (madeChange) {
          return newConversations;
        } else {
          return [...prevConversations, { recipients, messages: [newMessage] }];
        }
      });
    },
    [setConversastion]
  );

  useEffect(() => {
    console.log(socket)
    if (socket == null) {
      console.log("socket is null");
      return;
    }

    socket.on("receive-message", addMessageToConversation);

    return () => socket.off("receive-message");
  }, [socket, addMessageToConversation]);

  function sendMessage(recipients, text) {
    socket.emit("send-message", { recipients, text });

    addMessageToConversation({ recipients, text, sender: id });
  }

  const formattedConversations = conversations.map((conversation, index) => {
    const recipients = conversation.recipients.map((recipient) => {
      const contact = contacts.find((contact) => {
        return contact.id === recipient;
      });
      const name = (contact && contact.name) || recipient;
      return { id: recipient, name };
    });

    const messages = conversation.messages.map((message) => {
      const contact = contacts.find((contact) => {
        return contact.id === message.sender;
      });
      const name = (contact && contact.name) || message.sender;
      const forMe = id === message.sender;
      return { ...message, senderName: name, forMe };
    });
    const selected = index === selectedConversationIndex
    return { ...conversation, messages, recipients, selected };
  });

  const value = {
    conversations: formattedConversations,
    sendMessage,
    selectConversationIndex: setSelectedConversationIndex,
    createNewConversation,
  };

  return (
    <ConversationContext.Provider value={value}>
      {children}
    </ConversationContext.Provider>
  );
}

function arrayEquality(a, b) {
  if (a.length !== b.length) return false;

  a.sort();
  b.sort();
  return a.every((element, index) => {
    return element === b[index];
  });
}
