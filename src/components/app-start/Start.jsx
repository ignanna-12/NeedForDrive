import React from 'react';
import styles from './Start.module.scss';
import Slider from '../slider/Slider';
import StartScreen from '../startScreen/StartScreen';

const Start = () => {
  return (
    <div className={styles.start_Screen}>
      <StartScreen />
      <Slider />
    </div>
  );
};

export default Start;
