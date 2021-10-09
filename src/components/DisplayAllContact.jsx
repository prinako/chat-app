import React from "react";
import ContactBubble from "../utilities/ContactBubble";
import { useContacts } from "../contexts/ContactsProvider";

export default function DisplayAllContact() {
  const { contacts } = useContacts();

  return (
    <div className="hist-contacts">
      {contacts.map((contact) => {
        return <ContactBubble key={contact.id} contact={contact.name} />;
      })}
    </div>
  );
}
