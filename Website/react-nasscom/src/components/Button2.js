import React from 'react';
import './Button2.css';
import { Link } from 'react-router-dom';

const STYLES = ['btnn--primary', 'btnn--outline'];

const SIZES = ['btnn--medium', 'btnn--large'];

export const Button2 = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  path,
  dist 
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[1];

  return (
    <Link to={'/predictions/'+ window.location.href.split('/').pop() +'/' + path} className='btn-mobile'>
      <button
        className={`btnn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
