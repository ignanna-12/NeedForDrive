import React from 'react';
import SideBar from '../sideBar/SideBar';
import Autocomplete from './autocomplete/Autocomplete';
import HeroBlock from './heroBlock/HeroBlock';
import Logo from './logo/Logo';
import styles from './StartScreen.module.scss';

const StartScreen = () => {
  return (
    <div className={styles.startScreen}>
      <SideBar />
      <div className={styles.startScreen_info}>
        <div className={styles.top_row}>
          <Logo />
          <Autocomplete />
        </div>
        <HeroBlock />
      </div>
    </div>
  );
};

export default StartScreen;
