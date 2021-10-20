import React, { useState, useContext, useEffect, useCallback } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useContacts } from "./ContactsProvider";
import { useSocket } from "./SocketProvider";

const GroupsContext = React.createContext();

export function useGroups() {
  return useContext(GroupsContext);
}

export function GroupsProvider({ id, children }) {
  const [groups, setGroups] = useLocalStorage("groups", []);
  const [selectedGroupIndex, setSelectedGroupIndex] = useState();

  const { contacts } = useContacts();
  const socket = useSocket();

  function createNewGroup(recipients, groupName) {
    setGroups((prevGroups) => {
      return [...prevGroups, { recipients, messages: [], groupName }];
    });
  }

  const addMessageToGroup = useCallback(
    ({ recipients, text, sender, groupName}) => {
      setGroups((prevGroups) => {
        let madeChange = false;

        const newMessage = { sender, text };
        const newGroups = prevGroups.map((group) => {
          if (arrayEquality(group.recipients, recipients)) {
            madeChange = true;
            return {
              ...group,
              messages: [...group.messages, newMessage],
            };
          }

          return group;
        });

        if (madeChange) {
          return newGroups;
        } else {
          return [...prevGroups, { recipients, messages: [newMessage], groupName }];
        }
      });
    },
    [setGroups]
  );

  useEffect(() => {
    if (socket == null) {
      return;
    }

    socket.on("receive-group-message", addMessageToGroup);
    return () => socket.off("receive-group-message");
  }, [socket, addMessageToGroup]);

  function sendMessageToGroup(recipients, text, groupName) {
    socket.emit("send-group-message", { recipients, text, groupName });

    addMessageToGroup({ recipients, text, sender: id });
  }

  const formattedGroups = groups.map((group, index) => {
    const recipients = group.recipients.map((recipient) => {
      const contact = contacts.find((contact) => {
        return contact.id === recipient;
      });
      const name = (contact && contact.name) || recipient;
      return { id: recipient, name };
    });

    const messages = group.messages.map((message) => {
      const contact = contacts.find((contact) => {
        return contact.id === message.sender;
      });
      const name = (contact && contact.name) || message.sender;
      const forMe = id === message.sender;
      return { ...message, senderName: name, forMe };
    });
    const selected = index === selectedGroupIndex
    return { ...group, messages, recipients, selected };
  });

  const value = {
    groupConversations: formattedGroups,
    sendMessageToGroup,
    selectedGroup:formattedGroups[selectedGroupIndex],
    selectGroupIndex: setSelectedGroupIndex,
    createNewGroup,
  };

  return (
    <GroupsContext.Provider value={value}>
      {children}
    </GroupsContext.Provider>
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
