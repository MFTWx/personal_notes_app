import React from 'react';
import NoteForm from './create_form';

function CreateNote({ addNote }) {
  return (
    <div className='note-app__body'>
      <NoteForm addNote={ addNote } />
    </div>
  );
}

export default CreateNote;