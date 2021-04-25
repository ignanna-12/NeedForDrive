import React, { useState } from 'react';
import styles from './Checkbox.module.scss';
import SVG from 'react-inlinesvg';
import Galochka from '../../../assets/icons/Galochka.svg';

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
      {checked && <SVG src={Galochka} />}
      <label checked={checked}>{label}</label>
    </div>
  );
};

export default Checkbox;
