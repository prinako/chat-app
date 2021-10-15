import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "../utilities/Button";
import Input from "../utilities/Input";

export default function Login({ onIdSubmit }) {
  const idRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onIdSubmit(idRef.current.value);
  }

  function handleUserNew() {
    onIdSubmit(uuidv4());
  }

  return (
    <div className="login-container">
      <div className="form-container">
        <div className="form-title">
          <h1>Login</h1>
        </div>
        <div className="form-wrapper">
          <form onSubmit={handleSubmit}>
            <Input
              refs={idRef}
              className="form-control"
              type="text"
              placeholder="User ID"
            />
            <Button type="submit" className="form-btn" text="Login" />
          </form>
          <Button
            className="form-btn mt-2"
            onClick={handleUserNew}
            text="Create account"
          />
        </div>
      </div>
    </div>
  );
}
