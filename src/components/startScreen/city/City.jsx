import React from 'react';
import SVG from 'react-inlinesvg';
import Location from '../../../assets/icons/Group.svg';
import styles from './City.module.scss';

const City = () => {
  return (
    <div className={styles.location}>
      <SVG src={Location} />
      <div className={styles.city}>Ульяновск</div>
    </div>
  );
};

export default City;
