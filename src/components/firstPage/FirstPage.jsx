import React from 'react';
import styles from './FirstPage.module.scss';
import Slider from '../slider/Slider';
import StartScreen from '../startScreen/StartScreen';

const FirstPage = () => {
  return (
    <div className={styles.start_Screen}>
      <StartScreen />
      <Slider />
    </div>
  );
};

export default FirstPage;
