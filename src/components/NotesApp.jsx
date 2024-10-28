import React from 'react';
import Header from './Header';
import NotesInput from './NotesInput';
import NotesInputModal from './NotesInputModal';
import NotesListContainer from './NotesListContainer';
import AddNoteButton from './AddNoteButton';

// Notes Data
import { getInitialData } from '../utils';

class NotesApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
            searchTerm: '',
            isModalOpen: false,
        }

        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
        this.onArchivedNoteHandler = this.onArchivedNoteHandler.bind(this);
        this.onFindNoteHandler = this.onFindNoteHandler.bind(this);

        this.onOpenInputModal = this.onOpenInputModal.bind(this);
        this.onCloseInputModal = this.onCloseInputModal.bind(this);
    }

    onAddNoteHandler({ title, body }) {
        const maxNoteId = this.state.notes.reduce((max, note) => (note.id > max ? note.id : max), 0);

        this.setState((prevState) => {
          return {
            notes: [
              ...prevState.notes,
              {
                id: maxNoteId + 1,
                title,
                body,
                createdAt: new Date().toISOString(),
                archived: false,
              }
            ]
          }
        });

        this.onCloseInputModal();
    }

    onDeleteNoteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes: notes });
    }

    onArchivedNoteHandler(id) {
        const findNote = this.state.notes.find(item => item.id === id);

        if(findNote.archived) {
            const notes = this.state.notes.map(note => note.id === id ? {...note, archived: false} : note);

            this.setState({ notes: notes });
        } else {
            const notes = this.state.notes.map(note => note.id === id ? {...note, archived: true} : note);

            this.setState({ notes: notes });
        }
    }

    onFindNoteHandler(event) {
        this.setState({ searchTerm: event.target.value})
    }

    onOpenInputModal(event) {
        this.setState({ isModalOpen: true });
    }

    onCloseInputModal(event) {
        this.setState({ isModalOpen: false });
    }

    render() {
        const { notes, searchTerm } = this.state;

        const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(searchTerm.toLowerCase()));

        return (
            <>
                <Header findNote={this.onFindNoteHandler} />
                <main className='note-app__body'>
                    {/* <NotesInput addNote={this.onAddNoteHandler} /> */}
                    <NotesListContainer notesData={filteredNotes} deleteNote={this.onDeleteNoteHandler} archivedNote={this.onArchivedNoteHandler} />

                    {/* Add Note Btn */}
                    <AddNoteButton onOpenInputModal={this.onOpenInputModal} />
                    {/* Add Note Btn */}

                    {/* Input Notes Modal */}
                    <NotesInputModal addNote={this.onAddNoteHandler} isModalOpen={this.state.isModalOpen} onCloseModal={this.onCloseInputModal} />
                    {/* Input Notes Modal */}
                </main>
            </>
        )
    }
}

export default NotesApp;