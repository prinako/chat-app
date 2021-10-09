import React from "react";

function Input(props) {
  return (
    <React.StrictMode>
      <label className={props.labelClassName} htmlFor={props.id}>
        {props.label}
      </label>
      <input
        id={props.id}
        className={props.className}
        type={props.type}
        placeholder={props.placeholder}
        ref={props.refs}
        required={props.required}
      />
    </React.StrictMode>
  );
}

export default Input;
