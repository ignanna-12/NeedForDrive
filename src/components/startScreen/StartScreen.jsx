import React from 'react';
import Autocomplete from './autocomplete/Autocomplete';
import HeroBlock from './heroBlock/HeroBlock';
import Logo from './logo/Logo';
import styles from './StartScreen.module.scss';

const StartScreen = () => {
  return (
    <div className={styles.startScreen}>
      <Logo />
      <Autocomplete />
      <HeroBlock />
    </div>
  );
};

export default StartScreen;
