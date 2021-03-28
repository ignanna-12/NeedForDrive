import React from 'react';
import SVG from 'react-inlinesvg';
import Autocomplete from '../../../startScreen/autocomplete/Autocomplete';
import styles from './Location.module.scss';

const Location = () => {
  return (
    <div className={styles.location}>
      <Autocomplete title={'Город'} innerText={'Начните вводить город'} />
      <Autocomplete title={'Пункт выдачи'} innerText={'Начните вводить пункт'} />
    </div>
  );
};

export default Location;
