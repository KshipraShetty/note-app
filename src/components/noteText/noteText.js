import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './noteText.css';


class NoteText extends Component {
  handleCharCount = (event) => {
    const charCount = event.target.value.length;
    this.props.countUpdater(charCount);
    this.props.noteValue(event.target.value);
  }
  render() {
    return (
      <div className="NoteText">
        <div>
          <div className="HelpText">{this.props.helpText}</div>
        </div>
        <div>
          <textarea
            id="note-content"
            className={this.props.getCharsLeft === 0 ? 'NoteTextAreaRed' : 'NoteTextArea'}
            maxLength={this.props.getMaxChars}
            onChange={this.handleCharCount}
            value={this.props.value}
          />
        </div>
      </div>
    );
  }
}

NoteText.propTypes = {
  getCharsLeft: PropTypes.number,
  getMaxChars: PropTypes.number,
  helpText: PropTypes.string,
  countUpdater: PropTypes.func,
  value: PropTypes.string,
  noteValue: PropTypes.func,
};

NoteText.defaultProps = {
  getCharsLeft: 0,
  getMaxChars: 0,
  helpText: 'Enter note below',
  countUpdater: charCount => charCount,
  value: '',
  noteValue: text => text,
};

export default NoteText;
