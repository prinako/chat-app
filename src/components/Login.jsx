import React, { useState } from "react";
import Button from "./utilities/Button";
import Input from "./utilities/Input";

function Login(props) {

  const [isUserNew, setUserNew] = useState(true);

  function handleUserNew() {
    setUserNew(prevState => !prevState);
  }

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-title">
          <h1>{isUserNew ? "Login" : "Sign Up"}</h1>
        </div>
        <div className="form-wrapper">
          <Input
            className="form-control"
            type="email"
            placeholder={isUserNew ? "User Name or ID" : "User Name"}
          />
          <Input
            className="form-control"
            type="password"
            placeholder="Password"
          />
          <Button
            onClick={() => props.onLogin()}
            className="form-btn mt-2"
            text={isUserNew ? "Login" : "Create"}
          />
          <button className="form-btn-link mt-2" onClick={handleUserNew}>
            {isUserNew ? "Create account" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
