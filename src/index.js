import React from 'react';
import './main.css';
import PropTypes from 'prop-types';

class ZeroToColorImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const animationStyle = `toColor ${this.props.animationLength}s`;
    return (
      <img
        src={this.props.imageSource}
        style={{ animation: animationStyle, ...this.props.style }}
      />
    );
  }
}

ZeroToColorImage.propTypes = {
  animationLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  imageSource: PropTypes.string.isRequired
};

export default ZeroToColorImage;
