import React, { Component } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import NoteTitle from '../noteTitle/noteTitle';
import NoteText from '../noteText/noteText';
import SaveOptions from '../saveOptions/saveOptions';
import NoteHistory from '../noteHistory/noteHistory';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charsLeft: 10,
      maxChar: 10,
      noteTitle: '',
      noteText: '',
      savedNotes: [],
      display: 1,
      noteKey: 0,
    };
  }

  handleCharCount = (charCount) => {
    const charLength = this.state.maxChar - charCount;
    this.setState({ charsLeft: charLength });
  }

  changeDisplay = (dispKey) => {
    this.setState({ display: dispKey });
  }

  saveNote = () => {
    const currentKey = this.state.noteKey;
    const newSavedNotes = this.state.savedNotes;
    newSavedNotes[currentKey] = {
      noteKey: this.state.noteKey,
      noteTitle: this.state.noteTitle,
      noteText: this.state.noteText,
    };

    this.setState({
      savedNotes: newSavedNotes,
      noteTitle: '',
      noteText: '',
      charsLeft: this.state.maxChar,
      display: 0,
      noteKey: newSavedNotes.length + 1,
    });
  }
  saveText = (text) => {
    this.setState({ noteText: text });
  }

  saveTitle = (title) => {
    this.setState({ noteTitle: title });
  }

  editNote = (noteKey) => {
    const noteData = this.state.savedNotes[noteKey];
    this.setState({
      noteText: noteData.noteText,
      noteTitle: noteData.noteTitle,
      noteKey: noteData.noteKey,
    }, this.changeDisplay(1));
  }


  render() {
    if (this.state.display) {
      return (
        <div className="App">
          <Header
            headingText="Start taking notes"
          />


          <NoteTitle
            noteTitle="Note Title"

            buttonText="en"
            titleValue={this.saveTitle}
            noteValue={this.state.noteTitle}
          />


          <NoteText
            helpText="Please type your note below"
            value={this.state.noteText}
            noteValue={this.saveText}
            countUpdater={this.handleCharCount}
            getCharsLeft={this.state.charsLeft}
            getMaxChars={this.state.maxChar}
          />


          <SaveOptions
            charCount={this.state.charsLeft}
            saveText="Save"
            saveNoteFunction={this.saveNote}
          />


          <Footer
            footerText="About"
          />
        </div>
      );
    }


    const savedNoteItems = this.state.savedNotes.map(note => (
      <NoteHistory
        key={note.noteKey}
        noteId={note.noteKey}
        noteTitle={note.noteTitle}
        noteText={note.noteText}
        editHandler={this.editNote}
      />));

    return (
      <div className="App">
        <Header
          headingText="Note History"
        />
        {savedNoteItems}
        <button
          className="CreateNoteButton"
          onClick={() => {
          this.setState({
            display: 1,
          });
        }}
        >
        Create Another Note
        </button>
        <Footer
          footerText="About"
        />
      </div>
    );
  }
}

export default App;
