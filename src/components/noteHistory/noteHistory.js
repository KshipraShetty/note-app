import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './noteHistory.css';


class NoteHistory extends Component {
  startEdit = (event) => {
    console.log(event.target);
    this.props.editHandler(event.target.id);
  }
  render() {
    return (
      <div
        className="NoteHistory"
        id={this.props.noteId}
        onClick={this.startEdit}
      >
        <h4>{this.props.noteTitle}</h4>
        <p>{this.props.noteText}</p>
      </div>
    );
  }
}

NoteHistory.propTypes = {
  noteTitle: PropTypes.string,
  noteText: PropTypes.string,
  noteId: PropTypes.number,
  editHandler: PropTypes.func,
};

NoteHistory.defaultProps = {
  noteTitle: '',
  noteText: '',
  noteId: 0,
  editHandler: () => {},
};

export default NoteHistory;
