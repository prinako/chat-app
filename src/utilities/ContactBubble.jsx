import React from "react";

export default function ContactBubble(props){
    return(
        <div key={props.keys} onClick={props.onClick} role={props.role} className="cont-body-container">
            <p className="user-name-text">{props.contact}</p>
        </div>
    )
}