import React from "react";

export default function ContactBubble(props){
    return(
        <div  className="cont-body-container">
            <p className="user-name-text">{props.contact}</p>
        </div>
    )
}