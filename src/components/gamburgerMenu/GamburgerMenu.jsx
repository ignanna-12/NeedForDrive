import React from 'react';
import styles from './GamburgerMenu.module.scss';
import SVG from 'react-inlinesvg';
import Cross from '../../assets/icons/cross.svg';
import Facebook from '../../assets/icons/Facebook_white.svg';
import Instagram from '../../assets/icons/Instagram_white.svg';
import Telegram from '../../assets/icons/Telegram_white.svg';

const GamburgerMenu = ({ updateToggle }) => {
  return (
    <>
      <div className={styles.menu_container}></div>
      <div className={styles.menu}>
        <button className={styles.sidebar_menu_button_up} onClick={updateToggle}>
          <SVG src={Cross} />
        </button>
        <div className={styles.options}>
          <p>ПАРКОВКА</p>
          <p>СТРАХОВКА</p>
          <p>БЕНЗИН</p>
          <p>ОБСЛУЖИВАНИЕ</p>
          <div className={styles.social}>
            <SVG src={Telegram} />
            <SVG src={Facebook} />
            <SVG src={Instagram} />
          </div>
        </div>
      </div>
    </>
  );
};

export default GamburgerMenu;
