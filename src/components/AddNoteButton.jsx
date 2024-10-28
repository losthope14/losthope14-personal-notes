import React from 'react';

const AddNoteButton = ({ onOpenInputModal }) => {
  return (
    <button className='add-note-btn' onClick={onOpenInputModal}>+</button>
  );
}

export default AddNoteButton;