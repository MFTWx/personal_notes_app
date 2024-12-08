import React from "react";
import { getInitialData } from "../utils";
import Header from "./NotesHeader/header";
import CreateNote from "./NotesCreation/create_note_app";
import NoteList from "./NotesList/list_note";
import NoteArchived from "./NotesArchived/archived_note";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            searchQuery: ''
        }

        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
        this.onUpdateNoteHandler = this.onUpdateNoteHandler.bind(this);
        this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
    }

    onAddNoteHandler({title, body, createdAt}){
        this.setState((prevState) => {
            return {
                notes : [
                    ...prevState.notes,
                    {
                        id: prevState.notes.length + 1,
                        title,
                        body,
                        createdAt,
                        archived: false
                    }
                ]
            }
        });
    }

    onDeleteNoteHandler(id){
      const notes = this.state.notes.filter(note => note.id !== id);
      this.setState({ notes });
    }

    onUpdateNoteHandler(id){
      this.setState((prevState) => {
        const notes = prevState.notes.map((note) => {
          if (note.id === id) {
            if(note.archived === true) {
              return { ...note, archived: false };
            } else {
              return { ...note, archived: true };
            }
          }
          return note;
        });
        return { notes };
      });
    }

    onSearchEventHandler(event){
      this.setState({ searchQuery: event.target.value });
    }

  render() {
    const searchedNotes = this.state.notes.filter(note => note.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()));

    return (
      <div>
        <Header onSearchChange={this.onSearchEventHandler} />
        <CreateNote addNote={this.onAddNoteHandler} />
        <NoteList notes={searchedNotes} onDelete={this.onDeleteNoteHandler} onUpdate={this.onUpdateNoteHandler} />
        <NoteArchived notes={searchedNotes} onDelete={this.onDeleteNoteHandler} onUpdate={this.onUpdateNoteHandler} />
      </div>
    );
  }
}

export default NoteApp;