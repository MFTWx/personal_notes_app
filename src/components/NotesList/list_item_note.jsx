import React from "react";
import { showFormattedDate } from "../../utils";
import NoteItemBody from "./list_item_body";

function NoteItem({ note }) {
  return (
      <NoteItemBody 
        title={note.title} 
        body={note.body} 
        createdAt={showFormattedDate(note.createdAt)} 
      />
  );
}

export default NoteItem;