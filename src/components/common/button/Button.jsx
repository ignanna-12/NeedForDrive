import React from 'react';
import styles from './Button.module.scss';

const Button = ({ innerText, onClick, disabled }) => {
  return (
    <button className={styles.btn} onClick={onClick} disabled={disabled}>
      {innerText}
    </button>
  );
};

export default Button;
