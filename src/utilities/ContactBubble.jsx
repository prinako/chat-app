import React from "react";

export default function ContactBubble(props){
    return(
        <div onClick={props.onClick} onMouseOver={props.onMouseOver} role={props.role} className="cont-body-container">
            <p className="user-name-text">{props.contact}</p>
        </div>
    )
}