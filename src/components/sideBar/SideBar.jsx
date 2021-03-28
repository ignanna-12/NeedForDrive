import React, { useState } from 'react';
import styles from './SideBar.module.scss';

const SideBar = () => {
  const [lg, setLg] = useState(true);
  const onClickLanguage = () => {
    setLg((i) => (i = !lg));
  };
  return (
    <div className={styles.sidebar}>
      <button className={styles.sidebar_menu_button}>
        <svg
          className={styles.sidebar_menu_button_icon}
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
        >
          <path d="M3.5 7a.5.5 0 010-1h17a.5.5 0 110 1h-17zm0 5a.5.5 0 110-1h17a.5.5 0 110 1h-17zm0 5a.5.5 0 110-1h17a.5.5 0 110 1h-17z"></path>
        </svg>
      </button>
      <button className={styles.sidebar_menu_button} onClick={onClickLanguage}>
        {lg ? 'Ru' : 'Eng'}
      </button>
    </div>
  );
};

export default SideBar;
