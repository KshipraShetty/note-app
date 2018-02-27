import React from 'react';
import PropTypes from 'prop-types';
// import './syncButton.css';

class SyncButton extends React.Component {
  render() {
    return (
      <div className="SyncButton">
        <button onClick={this.props.syncHandler}> {this.props.text}</button>
      </div>
    );
  }
}

SyncButton.propTypes = {
  text: PropTypes.string,
};

SyncButton.defaultProps = {
  text: 'Sync',
};


export default SyncButton;
