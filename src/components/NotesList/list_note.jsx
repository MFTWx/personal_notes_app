import React from "react";
import NoteItemList from "./list_item";

function NoteList({ notes, onDelete, onUpdate }) {
    return (
        <div className="notes-body">
            <h2>Catatan Aktif</h2>
            <NoteItemList notes={notes} onDelete={onDelete} onUpdate={onUpdate} />
        </div>
    );
}

export default NoteList;