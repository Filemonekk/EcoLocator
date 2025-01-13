import React from 'react';
import './Button.scss'


interface ButtonProps {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
  }


const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false, type = 'button' }) => {
    return (
      <button className='button-style' type={type} onClick={type === 'submit' ? undefined : onClick} disabled={disabled}>
        {label}
      </button>
    );
  };
  
  export default Button;