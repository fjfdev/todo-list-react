import React from 'react';
import './IconButton.scss';

const IconButton = ({
  className,
  iconSrc,
  iconAltText,
  onClick,
  textContent,
}) => (
  <button className={'IconButton ' + (className ? className : '') } onClick={onClick}>
    <img className="icon" src={iconSrc} alt={iconAltText} />
    <span className="textContent">{textContent}</span>
  </button>
);

export default IconButton;
