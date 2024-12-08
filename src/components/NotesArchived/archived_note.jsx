import React from "react";
import NoteItemArchived from "./archived_item";

function NoteArchived({notes, onDelete, onUpdate}) {
    return (
        <div className="notes-body">
            <h2>Arsip</h2>
            <NoteItemArchived notes={notes} onDelete={onDelete} onUpdate={onUpdate} />
        </div>
    );
}

export default NoteArchived;