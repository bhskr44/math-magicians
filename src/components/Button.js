import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { content, classes, handleClick } = this.props;
    return (
      <button type="button" className={`${classes}`} onClick={handleClick}>
        {content}
      </button>
    );
  }
}

Button.propTypes = {
  content: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
