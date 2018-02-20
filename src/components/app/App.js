import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { displaySaveAction, displayEditAction, switchAction } from '../redux/actions';
import Header from '../header/header';
import Footer from '../footer/footer';
import NoteTitle from '../noteTitle/noteTitle';
import NoteText from '../noteBody/noteBody';
import SaveOptions from '../saveOptions/saveOptions';
import NoteHistory from '../noteHistory/noteHistory';


import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charsLeft: 10,
      maxChar: 10,
      noteTitle: '',
      noteText: '',
      noteKey: 0,
      display: 1,
    //  savedNotes: [],
    };
  }

  handleCharCount = (charCount) => {
    const charLength = this.state.maxChar - charCount;
    this.setState({ charsLeft: charLength });
  }

  changeDisplay = (dispKey) => {
    // this.props.changeDisplay(dispKey);
    this.setState({ display: dispKey });
  }

  saveNote = () => {
    const currentKey = this.state.noteKey;
    const newSavedNotes = this.props.savedNotes;
    newSavedNotes[currentKey] = {
      noteKey: this.state.noteKey,
      noteTitle: this.state.noteTitle,
      noteText: this.state.noteText,
    };
    this.props.saveNote(newSavedNotes);
    // this.props.changeDisplay(0);
    this.setState(
      {
        noteTitle: '',
        noteText: '',
        charsLeft: this.state.maxChar,
        display: 0,
        noteKey: newSavedNotes.length + 1,
      },
      this.changeDisplay(this.state.display),
    );
  }
  saveText = (text) => {
    this.setState({ noteText: text });
  }

  saveTitle = (title) => {
    this.setState({ noteTitle: title });
  }

  editNote = (noteKey) => {
    const noteData = this.props.savedNotes[noteKey];
    // this.props.changeDisplay(1);
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
            footer="About"
          />
        </div>
      );
    }


    const savedNoteItems = this.props.savedNotes.map(note => (
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
            // this.props.changeDisplay(1);
          this.setState({
            display: 1,
          });
        }}
        >
        Create Another Note
        </button>
        <Footer
          footer="About"
        />
      </div>
    );
  }
}
App.propTypes = {
  savedNotes: PropTypes.array,
  saveNote: PropTypes.func,
  editNote: PropTypes.func,
  display: PropTypes.number,
  changeDisplay: PropTypes.func,
};

App.defaultProps = {
  savedNotes: [],
  saveNote: () => {},
  display: 1,
  editNote: () => {},
  changeDisplay: () => {},
};
const mapStateToProps = state => ({
  savedNotes: state.savedNotes,
  // display: state.display,
});

const mapDispatchToProps = dispatch => ({
  saveNote: noteData => dispatch(displaySaveAction(noteData)),
  editNote: () => dispatch(displayEditAction()),
//  changeDisplay: display => dispatch(switchAction(display)),

});


export default connect(mapStateToProps, mapDispatchToProps)(App);
