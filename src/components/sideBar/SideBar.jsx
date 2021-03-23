import React, { useState } from 'react';
import GamburgerMenu from '../gamburgerMenu/GamburgerMenu';
import styles from './SideBar.module.scss';

const SideBar = () => {
  const [lg, setLg] = useState(true);
  const [toggle, setToggle] = useState(true);
  const onClickLanguage = () => {
    setLg((i) => (i = !lg));
  };
  return (
    <div className={styles.sidebar}>
      {!toggle && <GamburgerMenu />}
      <div className={styles.sidebar_button}>
        <button className={styles.sidebar_menu_button_up} onClick={() => setToggle(!toggle)}>
          <svg
            className={styles.sidebar_menu_button_icon}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
          >
            {toggle ? (
              <path d="M3.5 7a.5.5 0 010-1h17a.5.5 0 110 1h-17zm0 5a.5.5 0 110-1h17a.5.5 0 110 1h-17zm0 5a.5.5 0 110-1h17a.5.5 0 110 1h-17z"></path>
            ) : (
              <svg
                className={styles.sidebar_menu_button_icon}
                width="32"
                height="32"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 8L8 24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 8L24 24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </svg>
        </button>
        <button className={styles.sidebar_menu_button_down} onClick={onClickLanguage}>
          {lg ? 'Ru' : 'Eng'}
        </button>
      </div>
    </div>
  );
};

export default SideBar;
