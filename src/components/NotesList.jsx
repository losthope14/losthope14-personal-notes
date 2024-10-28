import React from 'react';
import NoteItem from './NoteItem';

const NotesList = ({ notesData, deleteNote, archivedNote }) => {
  if (notesData.length !== 0) {
    return (
        <section className='notes-list'>
            {notesData.map((note, index) => (
                <NoteItem key={index} deleteNote={deleteNote} archivedNote={archivedNote} {...note} />
            ))}
        </section>
    )
  }

  return (
    <p className='notes-list__empty-message'>Tidak ada catatan</p>
  )
}

export default NotesList;