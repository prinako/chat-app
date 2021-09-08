import React from "react";
import Button from "./Button";
import Input from "./Input";

function Login() {
  return (
    <div className="container">
      <div className="form-container">
        <div className="form-title">
          <h1>Login</h1>
        </div>
        <div className="form-wrapper">
          <Input
            className="form-control"
            type="email"
            placeholder="User Name or Email"
          />
          <Input
            className="form-control"
            type="password"
            placeholder="Password"
          />
          <Button className="form-btn mt-2" text="Login" />
          <a className="mt-2">Create account</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
