import React from 'react';
import './Button1.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn1--primary', 'btn1--outline'];

const SIZES = ['btn1--medium', 'btn1--large'];

export const Button1 = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  path
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to={'/select/'+ path} className='btn-mobile'>
      <button
        className={`btn1 ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
