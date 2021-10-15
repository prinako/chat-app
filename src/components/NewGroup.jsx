import React, { useState } from "react";
import Button from "../utilities/Button";
import CheckBox from "../utilities/CheckBox";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useContacts } from "../contexts/ContactsProvider";
import { useGroups } from "../contexts/GroupsProvider";

export default function NewGroup({ closeGroupModal }) {
  const [selectedContactIds, setSelectedContactIds] = useState([]);
  const { contacts } = useContacts();
  const { createNewGroup } = useGroups();

  function handleSubmit(e) {
    e.preventDefault();
console.log(e)
    createNewGroup(selectedContactIds);
    closeGroupModal();
  }

  function handleOnChecked(contactId) {
    setSelectedContactIds((prevSelectedContactIds) => {
      if (prevSelectedContactIds.includes(contactId)) {
        return prevSelectedContactIds.filter((prevId) => {
          return contactId !== prevId;
        });
      } else {
        return [...prevSelectedContactIds, contactId];
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="conversation-container">
        <div className="group-conversation-wrapper">
          <div className="conversation-title">
            <Button
              onClick={closeGroupModal}
              className="btn"
              text={<ArrowBackIcon />}
            />
            <div className="brand">
              <span className="text">New Group</span>
            </div>
          </div>
          <div className="hist-contacts">
            {contacts.map((contact) => {
              return (
                <div key={contact.id} className="checkbox-wrapper">
                  <CheckBox
                    onChange={()=>handleOnChecked(contact.id)}
                    className="input-checkbox"
                    id={contact.id}
                    type="checkbox"
                    name="checkbox"
                    label={contact.name}
                    htmlFor={contact.id}
                    value={selectedContactIds.includes(contact.id)}
                  />
                </div>
              );
            })}
          </div>
          <Button className="btn create-group" type="submit" text="Cerate" />
        </div>
      </div>
    </form>
  );
}
