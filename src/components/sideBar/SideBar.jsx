import React, { useState } from 'react';
import SVG from 'react-inlinesvg';
import Gamburger_button from '../../assets/icons/gamb.svg';
import Cross from '../../assets/icons/cross.svg';
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
          {toggle ? (
            <SVG src={Gamburger_button} />
          ) : (
            <div className={styles.whenMobile}>
              <SVG src={Cross} />
            </div>
          )}
        </button>
        <button className={styles.sidebar_menu_button_down} onClick={onClickLanguage}>
          {lg ? 'Рус' : 'Eng'}
        </button>
      </div>
    </div>
  );
};

export default SideBar;
