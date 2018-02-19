import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './noteTop.css';

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
          <input type="text" id="note-title" placeholder={this.props.placeHolder} onChange={this.updateNoteTitle} value={this.props.value} />
        </div>
      </div>
    );
  }
}


NoteTitle.propTypes = {
  placeHolder: PropTypes.string,
  noteTitle: PropTypes.string,
  buttonText: PropTypes.string,
  titleValue: PropTypes.func,
  value: PropTypes.string,
};

NoteTitle.defaultProps = {
  placeHolder: 'Type note title here',
  noteTitle: 'Enter note title below',
  buttonText: 'Lang',
  titleValue: text => text,
  value: '',
};


export default NoteTitle;
