import React from 'react';
import PropTypes from 'prop-types';
import { ImageToolTipWrapper } from './styles';

function ImageToolTip({ image, content, isOnline }) {
  return (
    <ImageToolTipWrapper isOnline={isOnline}>
      {image && <img src={image} alt="" />}
      {content && <p className="tooltip-text">{content}</p>}
      <span className="status" />
    </ImageToolTipWrapper>
  );
}

ImageToolTip.propTypes = {
  image: PropTypes.any.isRequired,
  content: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default ImageToolTip;
