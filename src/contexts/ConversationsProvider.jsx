import React, { useState, useContext, useEffect, useCallback } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useContacts } from "./ContactsProvider";
import { useSocket } from "./SocketProvider";

const ConversationContext = React.createContext();

export function useConversations() {
  return useContext(ConversationContext);
}

export function ConversationProvider({ id, chlidren }) {
  const [conversations, setConversastion] = useLocalStorage("conversation", []);
  const [selectedConversationIndex, setSelectedConversationIndex] = useState(0);
  const { contacts } = useContacts();
  const socket = useSocket();

  function createNewConversation(recipients) {
    setConversastion((prevConversations) => {
      return [...prevConversations, { recipients, messages: [] }];
    });
  }

  const addMessageToConversation = useCallback(
    ({ recipients, text, sender }) => {
      setConversastion((prevConversations) => {
        let madeChange = false;

        const newMessage = { sender, text };
        const newConversations = prevConversations.map((conversation) => {});
      });
    }
  );

  const formattedConversations = conversations.map((conversation, index) => {
    const recipients = conversation.recipients.map((recipient) => {
      const contact = contacts.find((contact) => {
        return contact.id === recipient;
      });
      const name = (contact && contact.name) || recipient;
      return { id: recipient, name };
    });
    return { ...conversation, recipients };
  });

  const value = {
    conversations: formattedConversations,
    createNewConversation
  };

  return (
    <ConversationContext.Provider value={value}>
      {chlidren}
    </ConversationContext.Provider>
  );
}
