import React from 'react';
import Autocomplete from './autocomplete/Autocomplete';
import HeroBlock from './heroBlock/HeroBlock';
import Logo from './logo/Logo';
import styles from './StartScreen.module.scss';

const StartScreen = () => {
  return (
    <div className={styles.startScreen}>
      <div className={styles.first_row}>
        <Logo />
        <Autocomplete />
      </div>
      <HeroBlock />
    </div>
  );
};

export default StartScreen;
