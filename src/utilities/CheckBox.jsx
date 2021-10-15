import React from "react";

export default function CheckBox(props) {
  return (
    <React.StrictMode>
      <label className={props.labelClassName} htmlFor={props.id}>
        <input
        onChange={props.onChange}
          id={props.id}
          className={props.className}
          type={props.type}
          placeholder={props.placeholder}
          ref={props.refs}
          required={props.required}
          name={props.name}
          value={props.value}
        />
        <span className="">{props.label}</span>
      </label>
    </React.StrictMode>
  );
}
