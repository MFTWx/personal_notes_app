import React from "react";
import NoteItem from "../NotesList/list_item_note";
import DeleteButton from "../NotesList/list_item_delete";
import UpdateButton from "../NotesList/list_item_update";

function NoteItemArchived({ notes, onDelete, onUpdate }) {
  const archivedNotes = notes.filter((note) => note.archived);

  return (
    <div className="notes-list">
      {archivedNotes.length > 0 ? (
        archivedNotes.map((note) => (
          <div key={note.id} className="note-item">
            <NoteItem note={note} />
            <div className="note-item__action">
              <DeleteButton id={note.id} onDelete={onDelete} />
              <UpdateButton id={note.id} onUpdate={onUpdate} text="Pindahkan"/>
            </div>
          </div>
        ))
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}
    </div>
  );
}

export default NoteItemArchived;