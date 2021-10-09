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
      className={props.className}
      placeholder={props.placeHolder}
    ></textarea>
  );
}
