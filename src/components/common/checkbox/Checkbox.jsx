import React, { useState } from 'react';
import styles from './Checkbox.module.scss';

const Checkbox = ({ onClick, label }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div
      className={styles.box}
      onClick={() => {
        onClick();
        setChecked(!checked);
      }}
    >
      <input type="checkbox" checked={checked} />
      <label checked={checked}>{label}</label>
    </div>
  );
};

export default Checkbox;
