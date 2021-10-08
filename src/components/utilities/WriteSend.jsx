import React, { useState } from "react";
import Textarea from "./Textarea";
import Button from "./Button";
import SendIcon from "@mui/icons-material/Send";

export default function WriteSend(props) {
  const [isNewMessage, setNewMessage] = useState("");

  function handleOnClick() {
    props.onChange(isNewMessage);
    setNewMessage("") ;
  }

  return (
    <div className=" input-container">
      <Textarea
        className="input"
        onChange={setNewMessage}
        value={isNewMessage}
        placeHolder="text message"
      />
      <Button
        onClick={() => handleOnClick()}
        className="btn send-btn"
        text={<SendIcon fontSize="large" />}
      />
    </div>
  );
}
