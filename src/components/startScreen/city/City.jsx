import React from 'react';
import SVG from 'react-inlinesvg';
import Loco from '../../../assets/icons/Group.svg';
import styles from './City.module.scss';

const City = () => {
  return (
    <div className={styles.loco}>
      <SVG src={Loco} />
      <div className={styles.city}>Ульяновск</div>
    </div>
  );
};

export default City;
