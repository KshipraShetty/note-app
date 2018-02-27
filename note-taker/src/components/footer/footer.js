import React from 'react';
import PropTypes from 'prop-types';
import './footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        {this.props.footer}
      </div>
    );
  }
}

Footer.defaultProps = {
  footer: 'About Us',
};

Footer.propTypes = {
  footer: PropTypes.string,
};

export default Footer;
