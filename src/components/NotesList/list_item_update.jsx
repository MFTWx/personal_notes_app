import React from "react";

function UpdateButton({ id, onUpdate, text }) {
    return <button className="note-item__archive-button" onClick={() => onUpdate(id)}>{text}</button>;
}

export default UpdateButton;