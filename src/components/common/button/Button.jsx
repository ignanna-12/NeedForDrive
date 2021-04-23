import React from 'react';
import styles from './Button.module.scss';

const Button = ({ innerText, onClick, disabled, cl }) => {
  return (
    <button
      className={cl == 'green' ? styles.btn_red : styles.btn}
      onClick={onClick}
      disabled={disabled}
    >
      {innerText}
    </button>
  );
};

export default Button;
