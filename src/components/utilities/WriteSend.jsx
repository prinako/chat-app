import React, { useState } from "react";
import Textarea from "./Textarea";
import Button from "./Button";


export default function WriteSend(props) {
  const [isNewMessage, setNewMessage] = useState("")

  return (
    <div className=" send-container">
      <div className="send-wrapper">
        <Textarea onChange={setNewMessage} value={isNewMessage} />
        <Button onClick={() => props.onChange(isNewMessage)} className={props.className} text={props.text} />
      </div>
    </div>
  );
}
