import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        {this.props.heading}
      </div>
    );
  }
}

Header.propTypes = {
  heading: PropTypes.string,
};

Header.defaultProps = {
  heading: 'Start taking notes',
};

export default Header;
