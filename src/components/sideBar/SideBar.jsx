import React, { useState } from 'react';
import SVG from 'react-inlinesvg';
import Gamburger_button from '../../assets/icons/gamb.svg';
import GamburgerMenu from '../gamburgerMenu/GamburgerMenu';
import styles from './SideBar.module.scss';
import Portal from '../portal/Portal';

const SideBar = ({ parent }) => {
  const [lg, setLg] = useState(true);
  const [toggle, setToggle] = useState(true);
  const onClickLanguage = () => {
    setLg((i) => (i = !lg));
  };
  const updateToggle = () => {
    setToggle((current) => !current);
  };
  return (
    <div className={styles.sidebar}>
      {!toggle && (
        <Portal parent={parent}>
          <GamburgerMenu updateToggle={updateToggle} />
        </Portal>
      )}
      <div className={styles.sidebar_button}>
        <button className={styles.sidebar_menu_button_up} onClick={() => setToggle(!toggle)}>
          <SVG src={Gamburger_button} />
        </button>
        <button className={styles.sidebar_menu_button_down} onClick={onClickLanguage}>
          {lg ? 'Рус' : 'Eng'}
        </button>
      </div>
    </div>
  );
};

export default SideBar;
