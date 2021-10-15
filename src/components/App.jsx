import React from "react";
import Login from "./Login";
import Chat from "./Chat";
import useLocalStorage from "../hooks/useLocalStorage";
import { SocketProvider } from "../contexts/SocketProvider";
import { ContactsProvider } from "../contexts/ContactsProvider";
import { ConversationProvider } from "../contexts/ConversationsProvider";
import { GroupsProvider } from "../contexts/GroupsProvider";

export default function App() {
  const [id, setId] = useLocalStorage("id");

  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <GroupsProvider id={id}>
          <ConversationProvider id={id}>
            <Chat id={id} />
          </ConversationProvider>
        </GroupsProvider>
      </ContactsProvider>
    </SocketProvider>
  );

  return id ? dashboard : <Login onIdSubmit={setId} />;
}
