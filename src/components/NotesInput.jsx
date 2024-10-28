import React from 'react';

class NotesInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
        }

        this.onNoteTitleChangeEventHandler = this.onNoteTitleChangeEventHandler.bind(this);
        this.onNoteBodyChangeEventHandler = this.onNoteBodyChangeEventHandler.bind(this);
        this.onCreateNoteHandler = this.onCreateNoteHandler.bind(this);
    }

    onNoteTitleChangeEventHandler(event) {
        if(event.target.value.length <= 50) {
            this.setState(() => {
                return {
                    title: event.target.value,
                }
            })
        }
    }

    onNoteBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        })
    }

    onCreateNoteHandler(event) {
        this.props.addNote(this.state);

        this.setState(() => {
            return {
                title: '',
                body: '',
            }
        })
    }

    render() {
        return (
            <section className='note-input'>
                <h2>Buat Catatan</h2>
                <div className="note-input__body">
                    <p className='note-input__title__char-limit'>Sisa karakter: {50 - this.state.title.length}</p>
                    <input id='note-title' type='text' placeholder='Judul catatan...' value={this.state.title} onChange={this.onNoteTitleChangeEventHandler} />
                    <textarea id='note-content' placeholder='Tuliskan catatan Anda di sini...' rows={10} value={this.state.body} onChange={this.onNoteBodyChangeEventHandler}></textarea>
                    <button id='btnCreateNote' onClick={this.onCreateNoteHandler}>Buat</button>
                </div>
            </section>
        )
    }
}

export default NotesInput;