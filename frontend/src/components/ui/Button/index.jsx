import React from 'react';
import './button.scss';

const Button = (props) => {
  const className = `Button ${props.position}`
  return (
    <div className={className} onClick={props.onCLick}>
      <span>{props.children}</span>
    </div>
  )
};

export default Button;