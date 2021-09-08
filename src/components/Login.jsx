import React, { useState } from "react";
import Button from "./utilities/Button";
import Input from "./utilities/Input";

function Login() {
  const [HaveAccount, setHaveAccount] = useState(true);

  function handleHaveAccount() {
    setHaveAccount(HaveAccount ? false : true);
  }

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-title">
          <h1>{HaveAccount ? "Login" : "Sign Up"}</h1>
        </div>
        <div className="form-wrapper">
          <Input
            className="form-control"
            type="email"
            placeholder={HaveAccount ? "User Name or ID" : "User Name"}
          />
          <Input
            className="form-control"
            type="password"
            placeholder="Password"
          />
          <Button
            className="form-btn mt-2"
            text={HaveAccount ? "Login" : "Create"}
          />
          <button className="form-btn-link mt-2" onClick={handleHaveAccount}>
            {HaveAccount ? "Create account" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
