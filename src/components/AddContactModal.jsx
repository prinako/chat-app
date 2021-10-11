import React, { useRef } from "react";
import Input from "../utilities/Input";
import Button from "../utilities/Button";
import { useContacts } from "../contexts/ContactsProvider";

export default function AddContactModal({
  closeAddContactModal,
  openConversationModal,
}) {
  const userNameRef = useRef();
  const userIdRef = useRef();
  const { createNewContact } = useContacts();

  function handleOnSubmit(e) {
    e.preventDefault();
    createNewContact(userIdRef.current.value, userNameRef.current.value);

    closeAddContactModal();
    openConversationModal();
  }

  return (
    <div className="add-container">
      <div className="add-wrapper">
        <div className="title">
          <h1>Add New Friend</h1>
        </div>
        <form onSubmit={handleOnSubmit}>
          <div className="add-input-container">
            <Input
              refs={userNameRef}
              className="user-name"
              labelClassName="label"
              label="Name"
              id="user-name"
              type="text"
              placeholder="User Name"
              required="required"
            />
            <Input
              refs={userIdRef}
              className="user-name"
              id="user-id"
              labelClassName="label"
              label="ID"
              placeholder="User ID"
              required="required"
            />
          </div>
          <div className="add-btn-container">
            <div
              role="button"
              onClick={() => {
                closeAddContactModal();
                openConversationModal();
              }}
              className="btn cancel-btn"
            >
              Cancel
            </div>
            <Button type="submit" className="btn add-btn" text="Add" />
          </div>
        </form>
      </div>
    </div>
  );
}
