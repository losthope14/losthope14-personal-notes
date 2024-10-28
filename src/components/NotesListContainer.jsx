import React from 'react';
import NotesList from './NotesList';

const NotesListContainer = ({ notesData, deleteNote, archivedNote }) => {
  const activeNotesList = notesData.filter(note => note.archived === false);
  const archivedNotesList = notesData.filter(note => note.archived === true);

  return (
    <>
        <h2>Catatan Aktif</h2>
        <NotesList notesData={activeNotesList} deleteNote={deleteNote} archivedNote={archivedNote} />

        <h2>Arsip</h2>
        <NotesList notesData={archivedNotesList} deleteNote={deleteNote} archivedNote={archivedNote} />
    </>
  )
}

export default NotesListContainer;