import React from "react";

export default function Textarea(props) {
  function onChange(e) {
    const value = e.target.value;
    props.onChange(value);
  }

  return (
    <textarea
      onChange={onChange}
      value={props.value}
      className={`input ${props.className}`}
      placeholder={props.placeHolder}
      required={props.required}
    ></textarea>
  );
}
