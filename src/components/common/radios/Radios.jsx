import React, { useState } from 'react';
import styles from './Radios.module.scss';

const Radios = ({ setDefaultValue, selectedValue, defaultText, list, holeList }) => {
  const [checked, setChecked] = useState(defaultText);
  return (
    <div className={styles.radios}>
      <div className={styles.radio}>
        <input
          type="radio"
          value={defaultText}
          onClick={(e) => {
            setDefaultValue(holeList);
            setChecked(defaultText);
          }}
          checked={checked == defaultText}
        />
        <label>{defaultText}</label>
      </div>
      {list.map((v, i) => (
        <div className={styles.radio} key={i}>
          <input
            type="radio"
            onClick={(e) => {
              selectedValue(v);
              setChecked(v);
            }}
            checked={checked == v}
          />
          <label>{v}</label>
        </div>
      ))}
    </div>
  );
};

export default Radios;
