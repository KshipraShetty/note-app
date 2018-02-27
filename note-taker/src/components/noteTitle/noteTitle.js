import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './noteTitle.css';

class NoteTitle extends Component {
  updateNoteTitle = (event) => {
    this.props.titleValue(event.target.value);
  }

  render() {
    return (
      <div className="NoteTitle">
        <div>
          <div className="TitleText">{this.props.noteTitle}</div>
          <button className="LangButton">{this.props.buttonText}</button>
        </div>
        <div>
          <input type="text" id="note-title" onChange={this.updateNoteTitle} value={this.props.noteValue} />
        </div>
      </div>
    );
  }
}


NoteTitle.propTypes = {
  noteTitle: PropTypes.string,
  buttonText: PropTypes.string,
  titleValue: PropTypes.func,
  noteValue: PropTypes.string,
};

NoteTitle.defaultProps = {
  noteTitle: 'Note Title',
  buttonText: 'Lang',
  titleValue: text => text,
  noteValue: '',
};


export default NoteTitle;
