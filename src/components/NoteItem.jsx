import React from 'react';
import { showFormattedDate } from '../utils';

const NoteItem = ({ deleteNote, archivedNote, id, title, body, createdAt, archived }) => {
  return (
    <div className='note-item'>
        <div className='note-item__content'>
            <h3 className='note-item__title'>{ title }</h3>
            <p className='note-item__date'>{ showFormattedDate(createdAt) }</p>
            <p className='note-item__body'>{ body }</p>
        </div>
        <div className="note-item__action">
            <button className='note-item__delete-button' onClick={() => deleteNote(id)}>Delete</button>
            {(archived === true) &&
              <button className='note-item__archive-button' onClick={() => archivedNote(id)}>Pindahkan</button>
            }
            {(archived === false) &&
              <button className='note-item__archive-button' onClick={() => archivedNote(id)}>Arsipkan</button>
            }
        </div>
    </div>
  )
}

export default NoteItem;