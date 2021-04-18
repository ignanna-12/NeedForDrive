import React from 'react';
import styles from './AddOptions.module.scss';

const AddOptions = ({ colors }) => {
  return (
    <div className={styles.add_options}>
      <div className={styles.radios}>
        {colors.map((color, i) => (
          <label key={i} onClick={(e) => {}}>
            <button className={styles.circle} />
            <span>{color}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default AddOptions;
