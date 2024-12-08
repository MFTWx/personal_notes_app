import React from "react";
import NoteItem from "./list_item_note";
import DeleteButton from "./list_item_delete";
import UpdateButton from "./list_item_update";

function NoteItemList({ notes, onDelete, onUpdate }) {
  const listNotes = notes.filter((note) => !note.archived);


  return (
    <div className="notes-list">
      {listNotes.length > 0 ? (
        listNotes.map((note) => (
          <div key={note.id} className="note-item">
            <NoteItem note={note} />
            <div className="note-item__action">
              <DeleteButton id={note.id} onDelete={onDelete} />
              <UpdateButton id={note.id} onUpdate={onUpdate} text="Arsipkan" />
            </div>
          </div>
        ))
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}
    </div>
  );
}

export default NoteItemList;