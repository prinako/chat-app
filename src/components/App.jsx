import React from "react";
import Login from "./Login";
import Chat from "./Chat";
import useLocalStorage from "../hooks/useLocalStorage";
import { SocketProvider } from "../contexts/SocketProvider";
import { ContactsProvider } from "../contexts/ContactsProvider";
import { ConversationProvider } from "../contexts/ConversationsProvider";

export default function App() {
  const [id, setId] = useLocalStorage("id");

  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationProvider id={id}>
          <Chat id={id} />;
        </ConversationProvider>
      </ContactsProvider>
    </SocketProvider>
  );

  return id ? dashboard : <Login onIdSubmit={setId} />;
}
